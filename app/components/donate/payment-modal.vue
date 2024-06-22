<script setup lang="ts">
// Third Party Imports
import { loadStripe, type Stripe } from "@stripe/stripe-js";

// Local Imports
import Close from "~/components/icons/close.vue";

interface Emits {
  (event: "close"): void;
}

interface Props {
  isOpen: boolean;
}

//
// setup
//

let stripe!: Stripe | null;
let elements!: any;
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

//
// State
//

const paymentDialogRef = ref<HTMLDialogElement | null>(null);
const isLoading = ref<boolean>(false);
const errorToast = ref<string | undefined>(undefined);
const successToast = ref<string | undefined>(undefined);

//
// Lifecycle
//

watch(
  () => props.isOpen,
  async () => {
    if (!paymentDialogRef.value) return;

    if (!props.isOpen) {
      paymentDialogRef.value.close();
      return;
    }

    paymentDialogRef.value.showModal();

    const { key } = await fetch("/api/create-stripe").then((res) => res.json());

    stripe = await loadStripe(key);

    const { clientSecret } = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 1000,
        currency: "usd",
      }),
    }).then((res) => res.json());

    if (!clientSecret) {
      errorToast.value = "Error fetching client secret.";
      return;
    }

    successToast.value = `Client secret returned.`;

    elements = stripe?.elements({
      clientSecret,
      appearance: {
        theme: "flat",
        variables: {
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          fontSizeBase: "14px",
          fontSizeSm: "14px",
          fontSizeXs: "12px",
          fontSize2Xs: "11px",
          fontSize3Xs: "14px",
          fontSizeLg: "16px",
          fontSizeXl: "20px",
          colorText: "rgb(115, 115, 115)",
          colorPrimaryText: "#2e3440",
          iconColor: "#a3a3a3",
          tabIconSelectedColor: "#2e3440",
          focusOutline: "#e3e3e3",
          colorPrimary: "#d8dee9",
          accessibleColorOnColorPrimary: "#2e3440",
        },
      },
    });
    const paymentElement = elements.create("payment", {
      layout: {
        type: "tabs",
        defaultCollapsed: false,
      },
    });
    paymentElement.mount("#payment-element");
    const linkAuthenticationElement = elements.create("linkAuthentication", {});
    linkAuthenticationElement.mount("#link-authentication-element");
    isLoading.value = false;
  },
);

//
// Event Handlers
//

async function onSubmitPayment(): Promise<void> {
  if (isLoading.value) {
    return;
  }

  isLoading.value = true;

  const res = await stripe?.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/donate-return`,
    },
  });

  if (
    res?.error.type === "card_error" ||
    res?.error.type === "validation_error"
  ) {
    errorToast.value = res?.error.message!;
  } else {
    successToast.value = "An unexpected error occured.";
  }

  isLoading.value = false;
  emits("close");
}
</script>

<template>
  <dialog ref="paymentDialogRef" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <button
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        @click="() => emits('close')"
      >
        <Close />
      </button>
      <h3
        class="text-center font-bold text-lg cursor-default no-select text-neutral-700"
      >
        {{ $t("donate.grateful") }}
      </h3>
      <p
        class="text-center pt-2 pb-4 text-sm cursor-default no-select text-neutral-600"
      >
        {{ $t("donate.privacy") }}
      </p>
      <form id="payment-form" @submit.prevent="onSubmitPayment">
        <div id="link-authentication-element" />
        <div id="payment-element" />
        <div class="modal-action">
          <button class="btn mt-2 w-full" type="submit" :disabled="isLoading">
            {{ $t("donate.createDonation") }}
          </button>
        </div>
      </form>
    </div>
  </dialog>
  <div class="toast toast-end">
    <div v-if="errorToast" class="alert alert-info">
      <span>{{ errorToast }}</span>
    </div>
    <div v-if="successToast" class="alert alert-success">
      <span>{{ successToast }}</span>
    </div>
  </div>
</template>

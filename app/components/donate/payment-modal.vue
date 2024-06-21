<script setup lang="ts">
// Third Party Imports
import { loadStripe, type Stripe } from "@stripe/stripe-js";

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

const paymentDialogRef = ref(null);
const isLoading = ref<boolean>(false);
const messages = ref<string[]>([]);

//
// Lifecycle
//

watch(props.isOpen, async () => {
  if (!props.isOpen) return;

  paymentDialogRef.value.showModal();

  const { key } = await fetch("/api/create-stripe").then((res) => res.json());

  stripe = await loadStripe(key);

  const data = await fetch("/api/create-payment-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: 1000,
      currency: "usd",
    }),
  }).then((res) => res.json());

  if (!data) {
    messages.value.push("Error fetching client secret.");
    return;
  }

  messages.value.push(`Client secret returned.`);

  elements = stripe?.elements({ clientSecret: data.clientSecret });
  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
  const linkAuthenticationElement = elements.create("linkAuthentication");
  linkAuthenticationElement.mount("#link-authentication-element");
  isLoading.value = false;
});

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
      return_url: `${window.location.origin}/return`,
    },
  });

  if (
    res?.error.type === "card_error" ||
    res?.error.type === "validation_error"
  ) {
    messages.value.push(res?.error.message);
    paymentDialogRef.value?.close();
  } else {
    messages.value.push("An unexpected error occured.");
  }

  isLoading.value = false;
  emits("close");
}
</script>

<template>
  <dialog ref="paymentDialogRef" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form id="payment-form" @submit.prevent="onSubmitPayment">
          <div id="link-authentication-element" />
          <div id="payment-element" />
          <button class="btn" :disabled="isLoading">Pay now</button>
          <!--          <sr-messages :messages="messages" />-->
        </form>
      </div>
    </div>
  </dialog>
</template>

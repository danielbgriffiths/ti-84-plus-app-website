<script lang="ts" setup>
// Third Party Imports
import { loadStripe } from "@stripe/stripe-js";

definePageMeta({
  title: "TIPYTHON - Donation Thank You Page",
});

//
// Setup
//

let stripe;

//
// State
//

const errorToast = ref<string | undefined>();
const successToast = ref<string | undefined>();
const clientSecret = ref<string>("");

const currentRoute = computed(() => useRoute().query);

clientSecret.value = currentRoute.value?.payment_intent_client_secret as string;

//
// Lifecycle
//

onMounted(async (): Promise<void> => {
  const { key } = await fetch("/api/create-stripe").then((res) => res.json());

  stripe = await loadStripe(key);

  if (!stripe) return;

  const { error, paymentIntent } = await stripe.retrievePaymentIntent(
    clientSecret.value,
  );

  if (error?.message) {
    errorToast.value = error.message;
  }

  if (!paymentIntent) return;

  successToast.value = `Payment ${paymentIntent.status}`;

  setTimeout(() => {
    errorToast.value = undefined;
    successToast.value = undefined;
  }, 5000);
});
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center h-full">
      <h1
        class="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl cursor-default no-select"
      >
        {{ $t("donateReturn.thankYou") }}
      </h1>
    </div>
    <LandingCallToActionContact />
  </NuxtLayout>
  <div class="toast toast-end">
    <div v-if="errorToast" class="alert alert-info">
      <span>{{ errorToast }}</span>
    </div>
    <div v-if="successToast" class="alert alert-success">
      <span>{{ successToast }}</span>
    </div>
  </div>
</template>

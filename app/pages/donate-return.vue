<script lang="ts" setup>
// Third Party Imports
import { loadStripe } from "@stripe/stripe-js";

// Local Imports
import StripeMessages from "~/components/donate/stripe-messages.vue";

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

const messages = ref([]);
const clientSecret = ref("");

const currentRoute = computed(() => {
  return useRoute().query;
});
clientSecret.value = currentRoute.value?.payment_intent_client_secret;

//
// Lifecycle
//

onMounted(async (): Promise<void> => {
  const { key } = await fetch("/api/create-stripe").then((res) => res.json());

  stripe = await loadStripe(key);

  const { error, paymentIntent } = await stripe.retrievePaymentIntent(
    clientSecret.value,
  );

  if (error) {
    messages.value.append(error.message);
  }

  messages.value.push(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
});
</script>

<template>
  <NuxtLayout>
    <a href="/">home</a>
    <h1>Thank you!</h1>
    <StripeMessages v-if="clientSecret" :messages="messages" />
  </NuxtLayout>
</template>

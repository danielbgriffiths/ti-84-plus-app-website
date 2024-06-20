<script setup lang="ts">
// Third Party Imports
import { z } from "zod";

// Local Imports
import Send from "~/components/icons/send.vue";
import Message from "~/components/icons/message.vue";

//
// Setup
//

const contactForm = z.object({
  email: z.string().email().min(5),
});

//
// State
//

const inputValue = ref<string>("");
const isValid = ref<boolean>(false);

//
// Lifecycle
//

watch(inputValue, (nextValue: string): void => {
  isValid.value = contactForm.safeParse({ email: nextValue }).success;
});

//
// Event Handlers
//

async function onSubmitContact(): Promise<void> {
  const res = await useFetch("/api/email/create", {
    method: "POST",
    body: JSON.stringify({ email: inputValue.value }),
  });

  if (res.data) {
    console.log("Email sent successfully");
  } else {
    console.error("Failed to send email", res.error);
  }
}
</script>

<template>
  <form class="mt-6 flex max-w-md gap-x-4">
    <label class="input input-bordered flex items-center gap-2">
      <Message />
      <input
        type="text"
        class="grow"
        placeholder="Email"
        v-model="inputValue"
      />
    </label>
    <button
      type="submit"
      class="flex-none btn btn-ghost"
      :disabled="!isValid"
      @click="onSubmitContact"
    >
      <Send />
      {{ $t("landing.contact.form.send") }}
    </button>
  </form>
</template>

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

function onSubmitContact(): void {
  console.log("contact: ", inputValue.value);
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

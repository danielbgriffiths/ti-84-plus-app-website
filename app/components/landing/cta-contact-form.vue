<script setup lang="ts">
// Third Party Imports
import { z } from "zod";
import { useElementSize } from "@vueuse/core";

// Local Imports
import Send from "~/components/icons/send.vue";
import Message from "~/components/icons/message.vue";
import { BREAKPOINTS } from "~/constants";

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
const toastMessage = ref<string | undefined>(undefined);
const toastType = ref<string>("");
const isLoading = ref<boolean>(false);
const isDesktop = ref<boolean>(true);

//
// Lifecycle
//

onMounted((): void => {
  watch(useElementSize(document.body).width, (size: number): void => {
    isDesktop.value = size >= BREAKPOINTS.DESKTOP;
  });
});

watch(inputValue, (nextValue: string): void => {
  isValid.value = contactForm.safeParse({ email: nextValue }).success;
});

//
// Event Handlers
//

async function onSubmitContact(): Promise<void> {
  isLoading.value = true;

  const { data } = await useFetch("/api/email/create", {
    method: "POST",
    body: JSON.stringify({ email: inputValue.value }),
  });

  if (data) {
    toastMessage.value = "Email sent successfully";
    toastType.value = "alert-success";
  } else {
    toastMessage.value = "Failed to store email";
    toastType.value = "alert-error";
  }

  setTimeout(() => {
    toastMessage.value = undefined;
    isLoading.value = false;
  }, 2500);

  inputValue.value = "";
}
</script>

<template>
  <form class="mt-6 flex max-w-md gap-x-4" @submit.prevent="onSubmitContact">
    <label class="input input-bordered flex items-center gap-2">
      <Message />
      <input
        type="text"
        class="grow"
        placeholder="Email"
        v-model="inputValue"
      />
    </label>
    <button type="submit" class="flex-none btn btn-ghost" :disabled="!isValid">
      <span v-if="isLoading" class="loading loading-spinner loading-sm" />
      <Send />
      {{ isDesktop ? $t("landing.contact.form.send") : "" }}
    </button>
  </form>

  <div class="toast" v-if="toastMessage">
    <div :class="`alert ${toastType} shadow-xl`">
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

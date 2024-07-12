<script setup lang="ts">
// Third Party Imports
import { useLocalStorage } from "@vueuse/core";

// Local Imports
import { LOCAL_STORAGE_IS_BETA_BANNER_VISIBLE } from "~/constants";

//
// Setup
//

const route = useRoute();

//
// State
//

const isBannerVisible = useLocalStorage(
  LOCAL_STORAGE_IS_BETA_BANNER_VISIBLE,
  false,
);

//
// Event Handlers
//

function onClickDismiss(): void {
  isBannerVisible.value = false;
}
</script>

<template>
  <Header />
  <main
    class="mt-[50px]"
    :class="{ 'bg-white': route.path.includes('donate') }"
  >
    <slot />
  </main>
  <Footer />
  <div
    v-if="isBannerVisible"
    class="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-5 lg:px-8"
  >
    <div
      class="pointer-events-auto flex items-center justify-between gap-x-6 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5"
      style="background-color: rgb(55 114 162)"
    >
      <p class="text-sm text-white text-center w-full">
        TIPython is in beta and there may be inaccuracies and changes. If you
        have any feedback or questions please reach out via
        <a href="mailto:danielbgriffiths@protonmail.com" class="underline">
          email
        </a>
      </p>
      <button
        type="button"
        class="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]"
        @click="onClickDismiss"
      >
        <span class="sr-only">Dismiss</span>
        <svg
          class="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
main {
  min-height: calc(100vh - 52px - 50px);
}
</style>

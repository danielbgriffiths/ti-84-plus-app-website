<script setup lang="ts">
// Third Party Imports
import "highlight.js/styles/atom-one-dark.min.css";
import "daisyui/dist/full.css";

// Local Imports
import { LocaleCode } from "~/types";
import { getLocalCodes, LOCAL_STORAGE_LOCALE_KEY } from "~/constants";

//
// Setup
//

useHead({
  title: "TI-84 Python Apps",
  htmlAttrs: {
    lang: "en",
    "data-theme": "nord",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Python Applications for the TI-84 Plus CE Calculator.",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/img.png" }],
});

useSeoMeta({
  ogImage: "/img.png",
});

const i18n = useI18n();

//
// Lifecycle
//

onBeforeMount((): void => {
  i18n.locale.value = getLocaleCodeFromStorage();
});

//
// Functions
//

function getLocaleCodeFromStorage(): LocaleCode {
  const LOCALE_CODES = getLocalCodes(i18n.t);
  const storedCode = localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY);
  if (!Object.keys(LOCALE_CODES)?.includes(storedCode as LocaleCode))
    return LocaleCode.USEnglish;
  return storedCode as LocaleCode;
}
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

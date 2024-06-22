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
  title: "TIPYTHON - TI-84 Scientific Calculator Python Applications",
  htmlAttrs: {
    lang: "en",
    "data-theme": "nord",
  },
  meta: [
    { charset: "utf-8" },
    {
      name: "description",
      content:
        "The largest collection of Python Applications for the TI-84 Plus CE Calculator. Open source, tested and verified, continuously growing.",
    },
    {
      name: "keywords",
      content:
        "TI-84, Python, Applications, Calculator, CE, TI-84 Plus CE, CE-TI, CE-TI84, CE-TI84 Plus, CE-TI84 Plus CE, CE-TI84+CE, CE-TI84+",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    { name: "author", content: "Daniel Griffiths" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/img.png" }],
  script: [
    {
      type: "application/ld+json",
      children:
        "{\n" +
        '  "@context": "https://schema.org",\n' +
        '  "@type": "WebPage",\n' +
        '  "name": "TIPYTHON - TI-84 Scientific Calculator Python Applications",\n' +
        '  "description": "The largest collection of Python Applications for the TI-84 Plus CE Calculator. Open source, tested and verified, continuously growing.",\n' +
        '  "url": "https://www.tipython.com",\n' +
        '  "image": "https://www.tipython.com/img.png"\n' +
        "}",
    },
  ],
});

useSeoMeta({
  ogTitle: "TIPYTHON - TI-84 Scientific Calculator Python Applications",
  ogDescription:
    "The largest collection of Python Applications for the TI-84 Plus CE Calculator. Open source, tested and verified, continuously growing.",
  ogImage: "/img.png",
  ogUrl: "https://tipython.com",
  ogSiteName: "TIPYTHON",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "TIPYTHON - TI-84 Scientific Calculator Python Applications",
  twitterDescription:
    "The largest collection of Python Applications for the TI-84 Plus CE Calculator. Open source, tested and verified, continuously growing.",
  twitterImage: "/img.png",
  twitterSite: "https://tipython.com",
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

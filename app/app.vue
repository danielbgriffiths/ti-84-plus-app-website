<script setup lang="ts">
// Third Party Imports
import "highlight.js/styles/atom-one-dark.min.css";
import "daisyui/dist/full.css";

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
</script>

<template>
  <NuxtPage />
</template>

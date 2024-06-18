<script setup lang="ts">
// Local Imports
import HeroSection from "~/components/hero-section.vue";

//
// Setup
//

const route = useRoute();

//
// State
//

const isHome = computed(() => route.path === "/");
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 shadow-sm"
    :class="{ 'bg-white': !isHome }"
  >
    <PrimaryNavigation />
  </header>
  <HeroSection :is-home="isHome" />
</template>

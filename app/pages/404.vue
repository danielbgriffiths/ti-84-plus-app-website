<script lang="ts" setup>
definePageMeta({
  title: "TIPYTHON - 404 Not Found Page",
});
</script>

<template>
  <NuxtLayout>
    <div
      class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div class="text-center">
        <p class="text-base font-semibold text-neutral-400">404</p>
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-neutral-700 sm:text-5xl"
        >
          {{ $t("404.pageNotFound") }}
        </h1>
        <p class="mt-6 text-base leading-7 text-neutral-600">
          {{ $t("404.pageNotFoundDescription") }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/#applications-section" class="btn">
            {{ $t("404.backToHome") }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <LandingCallToActionContact />
  </NuxtLayout>
</template>

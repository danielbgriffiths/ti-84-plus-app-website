<script lang="ts" setup>
// Local Imports
import LongRightArrow from "~/components/icons/long-right-arrow.vue";

interface Props {
  isHome: boolean;
}

//
// Setup
//

defineProps<Props>();
</script>

<template>
  <div v-if="isHome" class="relative isolate px-6 pt-14 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffd242] to-[#3772a1] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-24">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-500 ring-1 ring-neutral-700/10 hover:ring-neutral-700/20"
        >
          {{ $t("hero.blurb") }}
          <NuxtLink
            href="#info-section"
            class="font-semibold text-neutral-700 ml-1"
          >
            <span class="absolute inset-0" aria-hidden="true" />
            {{ $t("readMore") }}
            <span aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
      </div>
      <div class="text-center">
        <h1
          class="text-4xl font-bold tracking-tight text-neutral-700 sm:text-6xl"
        >
          {{ $t("hero.title") }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-neutral-600">
          {{ $t("hero.subTitle") }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink href="#info-section" class="btn">{{
            $t("getStarted")
          }}</NuxtLink>
          <NuxtLink
            href="#info-section"
            class="flex items-center text-sm font-semibold leading-6 text-base"
          >
            {{ $t("learnMore") }}
            <LongRightArrow class="ml-2" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffd242] to-[#3772a1] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
  </div>
</template>

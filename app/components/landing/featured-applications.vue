<script lang="ts" setup>
// Local Imports
import ApplicationCard from "~/components/landing/application-card.vue";
import GroupLink from "~/components/landing/group-link.vue";
import LongRightArrow from "~/components/icons/long-right-arrow.vue";
import type { AppGroup } from "~/types";

interface Props {
  calculusGroup: AppGroup;
  preCalculusGroup: AppGroup;
  trigonometryGroup: AppGroup;
}

//
// Setup
//

defineProps<Props>();

//
// Event Handlers
//

function onSeeMore(): void {
  console.log("See More");
}
</script>

<template>
  <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd242] to-[#3772a1] opacity-20"
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
      />
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd242] to-[#3772a1] opacity-20"
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
      />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2
          class="text-4xl font-bold tracking-tight text-neutral-700 sm:text-6xl no-select cursor-default"
        >
          {{ $t("landing.featuredApplications.title") }}
        </h2>
        <p class="mt-6 text-lg leading-8 text-base no-select cursor-default">
          {{ $t("landing.featuredApplications.caption") }}
        </p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div
          class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"
        >
          <GroupLink :label="$t('group.calculus')" :group="calculusGroup" />
          <GroupLink
            :label="$t('group.trigonometry')"
            :group="trigonometryGroup"
          />
          <GroupLink
            :label="$t('group.preCalculus')"
            :group="preCalculusGroup"
          />
        </div>
        <div class="mt-16 flex justify-start items-end">
          <template
            v-for="(item, idx) in Array.from(calculusGroup.values()).slice(
              0,
              3,
            )"
            :key="idx"
          >
            <ApplicationCard :item="item" />
          </template>

          <button class="btn btn-ghost" @click="onSeeMore">
            {{ $t("seeMore") }}
            <LongRightArrow />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

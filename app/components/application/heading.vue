<script setup lang="ts">
// Local Imports
import Eye from "~/components/icons/eye.vue";
import Downloads from "~/components/icons/downloads.vue";
import Calendar from "~/components/icons/calendar.vue";
import Share from "~/components/icons/share.vue";
import Rating from "~/components/icons/rating.vue";
import RatingStars from "~/components/application/rating-stars.vue";
import { type AppItem, type ApplicationMeta } from "~/types";
import { GITHUB_URL } from "~/constants";

interface Props {
  item: AppItem;
  applicationMeta: ApplicationMeta;
}

//
// Setup
//

const props = defineProps<Props>();
const i18n = useI18n();

//
// State
//

const viewsText = computed<string>(() => {
  return i18n.t("views", { count: props.applicationMeta?.views ?? 0 });
});
const downloadsText = computed<string>(() => {
  return i18n.t("downloads", { count: props.applicationMeta?.downloads ?? 0 });
});
const createdText = computed<string>(() => {
  return i18n.t("created", { date: props.applicationMeta?.createdAt ?? "" });
});
const ratingsText = computed<string>(() => {
  return i18n.t("ratings", {
    count:
      props.applicationMeta?.ratingSum / props.applicationMeta?.ratingCount ??
      5,
  });
});
</script>

<template>
  <header
    class="mx-auto max-w-7xl mt-24 mb-8 p-4 bg-white shadow-sm rounded-md"
  >
    <div class="lg:flex lg:items-center lg:justify-between items-end">
      <div class="min-w-0 flex-1">
        <h2
          class="text-2xl font-bold leading-7 text-neutral-700 sm:truncate sm:text-3xl sm:tracking-tight no-select cursor-default"
        >
          {{ item.title }}
        </h2>
        <div
          class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
        >
          <div
            class="mt-2 flex items-center text-sm text-neutral-600 no-select cursor-default"
          >
            <Eye class="mr-2" />
            {{ viewsText }}
          </div>
          <div
            class="mt-2 flex items-center text-sm text-neutral-600 no-select cursor-default"
          >
            <Downloads class="mr-2" />
            {{ downloadsText }}
          </div>
          <div
            class="mt-2 flex items-center text-sm text-neutral-600 no-select cursor-default"
          >
            <Rating class="mr-2" />
            {{ ratingsText }}
          </div>
          <div
            class="mt-2 flex items-center text-sm text-neutral-600 no-select cursor-default"
          >
            <Calendar class="mr-2" />
            {{ createdText }}
          </div>
        </div>
      </div>
      <div class="mt-5 flex items-center justify-end lg:ml-4 lg:mt-0">
        <RatingStars :application-meta="applicationMeta" />

        <button
          type="button"
          class="inline-flex items-center btn btn-ghost mx-2"
        >
          <Share />
          {{ $t("share") }}
        </button>

        <NuxtLink
          :href="GITHUB_URL"
          class="inline-flex items-center btn btn-ghost mx-2"
        >
          <img
            src="/assets/github-mark.png"
            alt="Github Image"
            class="w-[18px] h-[18px]"
          />
          {{ $t("github") }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

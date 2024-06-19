<script setup lang="ts">
// Local Imports
import type { ApplicationMeta } from "~/types";

interface Props {
  applicationMeta: ApplicationMeta;
}

//
// Setup
//

const props = defineProps<Props>();

//
// Composables
//

const route = useRoute();

//
// State
//

const rating = ref<number>(0);

//
// Lifecycle
//

watch(
  [
    () => props.applicationMeta?.ratingSum,
    () => props.applicationMeta?.ratingCount,
  ],
  () => {
    rating.value =
      props.applicationMeta?.ratingSum / props.applicationMeta?.ratingCount ??
      0;
  },
);

//
// Event Handlers
//

async function onClickRating(value: number): Promise<void> {
  const downloadedApps = localStorage.getItem("downloadedApps");
  if (downloadedApps?.includes(`${route.params.group}::${route.params.name}`)) {
    rating.value = value;
    await fetch(
      `/api/application-meta/${route.params.group}/${route.params.name}/ratings`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ratingsCount: props.applicationMeta.ratingCount + 1,
          ratingsSum: props.applicationMeta.ratingSum + value,
        }),
      },
    );
    return;
  }

  // Toast to download the app
}
</script>

<template>
  <div class="rating rating-sm mr-4">
    <input
      type="radio"
      name="rating-1"
      value="1"
      class="mask mask-star"
      :checked="rating === 1"
      @click="() => onClickRating(1)"
    />
    <input
      type="radio"
      name="rating-1"
      value="2"
      class="mask mask-star"
      :checked="rating === 2"
      @click="() => onClickRating(2)"
    />
    <input
      type="radio"
      name="rating-1"
      value="3"
      class="mask mask-star"
      :checked="rating === 3"
      @click="() => onClickRating(3)"
    />
    <input
      type="radio"
      name="rating-1"
      value="4"
      class="mask mask-star"
      :checked="rating === 4"
      @click="() => onClickRating(4)"
    />
    <input
      type="radio"
      name="rating-1"
      value="5"
      class="mask mask-star"
      :checked="rating === 5"
      @click="() => onClickRating(5)"
    />
  </div>
</template>

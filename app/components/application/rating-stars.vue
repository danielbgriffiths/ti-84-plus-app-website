<script setup lang="ts">
// Local Imports
import type { ApplicationMeta } from "~/types";
import { LOCAL_STORAGE_HAS_DOWNLOADED_KEY } from "~/constants";

interface Props {
  applicationMeta: ApplicationMeta;
  hasDownloaded: boolean;
}

interface Emits {
  (event: "update-rating", value: number): void;
}

//
// Setup
//

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

//
// Composables
//

const route = useRoute();

//
// State
//

const rating = ref<number>(
  Math.round(
    props.applicationMeta?.ratingsSum / props.applicationMeta?.ratingsCount ??
      5,
  ),
);

//
// Lifecycle
//

watch(
  [
    () => props.applicationMeta?.ratingsSum,
    () => props.applicationMeta?.ratingsCount,
  ],
  () => {
    if (!props.applicationMeta) return;

    rating.value =
      props.applicationMeta?.ratingsSum / props.applicationMeta?.ratingsCount;
  },
);

//
// Event Handlers
//

async function onClickRating(value: number): Promise<void> {
  if (props.hasDownloaded) {
    rating.value = value;
    emits("update-rating", value);
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
      :class="{ '!bg-yellow-400': hasDownloaded }"
      :checked="rating === 1"
      :disabled="!hasDownloaded"
      @click="() => onClickRating(1)"
    />
    <input
      type="radio"
      name="rating-1"
      value="2"
      class="mask mask-star"
      :class="{ '!bg-yellow-400': hasDownloaded }"
      :checked="rating === 2"
      :disabled="!hasDownloaded"
      @click="() => onClickRating(2)"
    />
    <input
      type="radio"
      name="rating-1"
      value="3"
      class="mask mask-star"
      :class="{ '!bg-yellow-400': hasDownloaded }"
      :checked="rating === 3"
      :disabled="!hasDownloaded"
      @click="() => onClickRating(3)"
    />
    <input
      type="radio"
      name="rating-1"
      value="4"
      class="mask mask-star"
      :class="{ '!bg-yellow-400': hasDownloaded }"
      :checked="rating === 4"
      :disabled="!hasDownloaded"
      @click="() => onClickRating(4)"
    />
    <input
      type="radio"
      name="rating-1"
      value="5"
      class="mask mask-star"
      :class="{ '!bg-yellow-400': hasDownloaded }"
      :checked="rating === 5"
      :disabled="!hasDownloaded"
      @click="() => onClickRating(5)"
    />
  </div>
</template>

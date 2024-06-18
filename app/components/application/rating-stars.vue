<script setup lang="ts">
//
// State
//

const rating = ref<number>(3);

//
// Lifecycle
//

watch(
  () => rating.value,
  (value) => {
    console.log("Rating changed to", value);
    // Update data
  },
);
</script>

<template>
  <div class="rating rating-sm mr-4">
    <input
      type="radio"
      name="rating-1"
      value="1"
      class="mask mask-star"
      :checked="rating === 1"
      @click="rating = 1"
    />
    <input
      type="radio"
      name="rating-1"
      value="2"
      class="mask mask-star"
      :checked="rating === 2"
      @click="rating = 2"
    />
    <input
      type="radio"
      name="rating-1"
      value="3"
      class="mask mask-star"
      :checked="rating === 3"
      @click="rating = 3"
    />
    <input
      type="radio"
      name="rating-1"
      value="4"
      class="mask mask-star"
      :checked="rating === 4"
      @click="rating = 4"
    />
    <input
      type="radio"
      name="rating-1"
      value="5"
      class="mask mask-star"
      :checked="rating === 5"
      @click="rating = 5"
    />
  </div>
</template>

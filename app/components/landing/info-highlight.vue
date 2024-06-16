<script setup lang="ts">
interface Props {
  value: string;
  text: string;
  tooltipText: string;
}

//
// Setup
//

defineProps<Props>();
</script>

<template>
  <div class="mx-auto flex max-w-xs flex-col gap-y-4">
    <div class="tooltip" :data-tip="tooltipText">
      <span
        class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl cursor-default no-select"
      >
        {{ value }}
      </span>
    </div>

    <span class="text-base leading-7 text-gray-600 cursor-default no-select">
      {{ text }}
    </span>
  </div>
</template>

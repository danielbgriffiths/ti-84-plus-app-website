<script setup lang="ts">
// Local Imports
import Eye from "~/components/icons/eye.vue";
import type { AppItem } from "~/types";

interface Props {
  item: AppItem;
}

//
// Setup
//

defineProps<Props>();
</script>

<template>
  <div class="mr-4 h-full">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-neutral-700 no-select cursor-default">
          {{ item.title }}
        </h2>
        <p class="text-neutral-600 no-select cursor-default">
          {{ item.description.slice(0, 60) }} ...
        </p>
        <div class="card-actions justify-end">
          <NuxtLink
            :to="`/scripts/calculus/${item.name}`"
            class="btn btn-ghost text-neutral-400 no-select"
          >
            {{ $t("getApplication") }}
            <Eye />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

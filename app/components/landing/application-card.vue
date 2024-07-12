<script setup lang="ts">
// Local Imports
import Eye from "~/components/icons/eye.vue";
import { type AppItem, GroupName } from "~/types";

interface Props {
  group: GroupName;
  item: AppItem;
}

//
// Setup
//

defineProps<Props>();
</script>

<template>
  <div class="h-full lg:w-[30%] w-full">
    <div class="card min-w-[200px] w-full bg-base-100 shadow-xl">
      <div class="card-body lg:p-2 lg:pt-4">
        <h2 class="card-title text-neutral-700 no-select cursor-default">
          {{ item.title }}
        </h2>
        <p class="text-neutral-600 no-select cursor-default">
          {{ item.description.slice(0, 60) }} ...
        </p>
        <div class="card-actions justify-end">
          <NuxtLink
            :to="`/applications/${group}/${item.name}`"
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

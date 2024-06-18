<script setup lang="ts">
// Local Imports
import type { AppItem } from "~/types";
import Eye from "~/components/icons/eye.vue";
import Downloads from "~/components/icons/downloads.vue";
import Calendar from "~/components/icons/calendar.vue";
import Share from "~/components/icons/share.vue";
import CodeBracket from "~/components/icons/code-bracket.vue";

interface Props {
  item: AppItem;
}

defineProps<Props>();
</script>

<template>
  <header
    class="mx-auto max-w-7xl mt-24 mb-8 p-4 bg-white shadow-sm rounded-md"
  >
    <div class="lg:flex lg:items-center lg:justify-between items-end">
      <div class="min-w-0 flex-1">
        <h2
          class="text-2xl font-bold leading-7 text-neutral-700 sm:truncate sm:text-3xl sm:tracking-tight"
        >
          {{ item.title }}
        </h2>
        <div
          class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
        >
          <div class="mt-2 flex items-center text-sm text-neutral-600">
            <Eye />
            {{ 1023 }} views
          </div>
          <div class="mt-2 flex items-center text-sm text-neutral-600">
            <Downloads />
            {{ 64 }} downloads
          </div>
          <div class="mt-2 flex items-center text-sm text-neutral-600">
            <Calendar />
            Created {{ "January 9, 2020" }}
          </div>
        </div>
      </div>
      <div class="mt-5 flex items-center justify-end lg:ml-4 lg:mt-0">
        <div class="rating mx-2">
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" checked />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
        </div>

        <button
          type="button"
          class="inline-flex items-center btn btn-ghost mx-2"
        >
          <Share />
          Share
        </button>

        <button
          type="button"
          class="inline-flex items-center btn btn-ghost mx-2"
        >
          <CodeBracket />
          Repo
        </button>
      </div>
    </div>
  </header>
</template>

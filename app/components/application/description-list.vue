<script setup lang="ts">
// Local Imports
import { type AppItem, GroupName } from "~/types";

interface Props {
  item: AppItem;
  groupName: GroupName | undefined;
}

//
// Setup
//

const props = defineProps<Props>();
const i18n = useI18n();

//
// State
//

const documentationText = computed<string>(() =>
  i18n.t("application.info.documentationCaption", { name: props.item.title }),
);
</script>

<template>
  <div class="mx-auto max-w-7xl mb-8 p-4 bg-white shadow-sm rounded-md">
    <div class="flex justify-between items-center">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          {{ $t("application.info.applicationInformation") }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {{ documentationText }}
        </p>
      </div>
      <div
        class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 w-[50%]"
      >
        <div class="flex w-0 flex-1 items-center">
          <svg
            class="h-5 w-5 flex-shrink-0 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="ml-4 flex min-w-0 flex-1 gap-2">
            <span class="truncate font-medium">
              {{ "application_name-download" }}.pdf
            </span>
            <span class="flex-shrink-0 text-gray-400"><1kb</span>
          </div>
        </div>
        <div class="ml-4 flex-shrink-0">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            {{ $t("download") }}
          </a>
        </div>
      </div>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">
            {{ $t("category") }}
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ groupName }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">
            {{ $t("description") }}
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ item.description }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">
            {{ $t("exampleUsages") }}
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            margotfoster@example.com
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">
            {{ $t("testCoverage") }}
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            $120,000
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">
            {{ $t("files") }}
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            ... code blocks ...
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

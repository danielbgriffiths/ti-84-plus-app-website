<script setup lang="ts">
// Third Party Imports
import { asyncComputed } from "@vueuse/core";

// Local Imports
import ArrowDownTray from "~/components/icons/arrow-down-tray.vue";
import { type AppItem, GroupName } from "~/types";
import { getPrettyGroupName } from "~/constants";

interface Props {
  item: AppItem;
  hasDownloaded: boolean;
}

interface Emits {
  (event: "download"): void;
}

//
// Composables
//

const route = useRoute();

//
// Setup
//

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const i18n = useI18n();
const PRETTY_GROUP_NAME = getPrettyGroupName(
  i18n.t,
  route.params.group as GroupName,
);

//
// State
//

const documentationText = computed<string>(() =>
  i18n.t("application.info.documentationCaption", { name: props.item?.title }),
);

const testFile = asyncComputed<string>(async () => {
  if (!props.item) return "";

  const data: Response = await fetch(props.item.uri + "/test.py");
  const blob = await data.blob();
  return await blob.text();
});

const readmeFile = asyncComputed<string>(async () => {
  if (!props.item) return "";

  const data: Response = await fetch(props.item.uri + "/README.md");
  const blob = await data.blob();
  return await blob.text();
});
</script>

<template>
  <div class="mx-auto max-w-7xl mb-8 p-4 bg-white shadow-sm rounded-md">
    <div class="flex justify-between items-center">
      <div class="px-4 sm:px-0">
        <h3
          class="text-base font-semibold leading-7 text-gray-900 no-select cursor-default"
        >
          {{ $t("application.info.applicationInformation") }}
        </h3>
        <p
          class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 no-select cursor-default"
        >
          {{ documentationText }}
        </p>
      </div>
      <div
        class="flex items-center justify-end py-4 pl-4 pr-5 text-sm leading-6 w-[50%]"
      >
        <div class="ml-4 flex-shrink-0">
          <button
            class="btn btn-neutral text-white"
            aria-label="Download Application"
            @click="() => emits('download')"
          >
            <ArrowDownTray class="text-white" />
            {{ $t("createDownload") }}
          </button>
        </div>
      </div>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt
            class="text-sm font-medium leading-6 text-gray-900 no-select cursor-default"
          >
            {{ $t("category") }}
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 no-select cursor-default"
          >
            {{ PRETTY_GROUP_NAME }}
          </dd>
        </div>
        <div
          v-if="item?.description"
          class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
        >
          <dt
            class="text-sm font-medium leading-6 text-gray-900 no-select cursor-default"
          >
            {{ $t("description") }}
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ item.description }}
          </dd>
        </div>
        <div
          v-if="readmeFile"
          class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
        >
          <dt
            class="text-sm font-medium leading-6 text-gray-900 no-select cursor-default"
          >
            README.md
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            <div v-html="readmeFile" />
          </dd>
        </div>
        <div
          v-if="testFile"
          class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
        >
          <dt
            class="text-sm font-medium leading-6 text-gray-900 no-select cursor-default"
          >
            {{ $t("testCoverage") }}
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            <div class="mockup-code shadow-xl pb-0">
              <pre class="px-8">
                <code class="language-python no-select cursor-default" v-html="testFile" />
              </pre>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

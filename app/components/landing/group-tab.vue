<script lang="ts" setup>
// Local Imports
import type { AppGroup } from "~/types";

interface Props {
  label: string;
  group: AppGroup;
  isActive: boolean;
}

//
// Setup
//

const props = defineProps<Props>();
const i18n = useI18n();

//
// State
//

const tooltipText = computed<string>(() =>
  i18n.t("landing.groupLink.tooltipText", {
    label: props.label,
    size: props.group.size,
  }),
);
</script>

<template>
  <NuxtLink
    role="tab"
    class="tab min-h-[3rem] lg:px-2 px-0"
    :class="{ 'tab-active': isActive }"
  >
    <div class="lg:p-2 text-neutral-700 no-select">
      {{ label }}
      <div class="badge badge-primary lg:px-[.563rem] px-[.15rem]">
        <div class="tooltip" :data-tip="tooltipText">
          <span class="text-white">+{{ group.size }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

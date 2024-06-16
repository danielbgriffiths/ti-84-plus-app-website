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
    class="tab min-h-[3rem]"
    :class="{ 'tab-active': isActive }"
  >
    <div class="p-2 text-neutral-700 no-select">
      {{ label }}
      <div class="badge badge-primary">
        <div class="tooltip" :data-tip="tooltipText">
          <span class="text-neutral-200">+{{ group.size }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

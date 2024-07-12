<script setup lang="ts">
// Local Imports
import GroupTab from "~/components/landing/group-tab.vue";
import ApplicationPagination from "~/components/landing/application-pagination.vue";
import ApplicationCard from "~/components/landing/application-card.vue";
import { type AppGroup, type AppItem, GroupName } from "~/types";
import { getPageSizeOptions } from "~/constants";

interface Props {
  calculusGroup: AppGroup;
  preCalculusGroup: AppGroup;
  trigonometryGroup: AppGroup;
}

//
// Setup
//

const props = defineProps<Props>();
const i18n = useI18n();

const pageSizeOptions = getPageSizeOptions(i18n.t);

//
// State
//

const activeTab = ref<GroupName>(GroupName.Calculus);
const activePage = ref<number>(1);
const pageSize = ref<number>(6);
const groupItems = computed<AppItem[]>(() => {
  switch (activeTab.value) {
    case GroupName.Calculus:
      return Array.from(props.calculusGroup.values());
    case GroupName.Trigonometry:
      return Array.from(props.trigonometryGroup.values());
    case GroupName.PreCalculus:
      return Array.from(props.preCalculusGroup.values());
  }
});
const pageCount = computed<number>(() => {
  if (pageSize.value === -1) return 1;
  return Math.ceil(groupItems.value.length / pageSize.value);
});
const startSliceIndex = computed<number>(() => {
  if (pageSize.value === -1) return 0;
  return (activePage.value - 1) * pageSize.value;
});
const endSliceIndex = computed<number | undefined>(() => {
  if (pageSize.value === -1) return undefined;
  return activePage.value * pageSize.value;
});
const pageItems = computed<AppItem[]>(() => {
  return groupItems.value.slice(
    startSliceIndex.value,
    endSliceIndex.value as number,
  );
});

//
// Lifecycle
//

watch(pageSize, (): void => {
  onChangePage(1);
});

//
// Event Handlers
//

function onChangeTab(groupName: GroupName): void {
  activeTab.value = groupName;
  onChangePage(1);
}

function onChangePage(page: number): void {
  activePage.value = page;
}
</script>

<template>
  <div
    class="text-base font-semibold leading-7 flex lg:justify-between lg:items-end lg:flex-row flex-col"
  >
    <div
      role="tablist"
      class="tabs tabs-bordered sm:flex-col lg:grid md:grid flex flex-col"
    >
      <GroupTab
        :label="$t('group.calculus')"
        :group="calculusGroup"
        :is-active="activeTab === GroupName.Calculus"
        @click="() => onChangeTab(GroupName.Calculus)"
      />
      <GroupTab
        :label="$t('group.trigonometry')"
        :group="trigonometryGroup"
        :is-active="activeTab === GroupName.Trigonometry"
        @click="() => onChangeTab(GroupName.Trigonometry)"
      />
      <GroupTab
        :label="$t('group.preCalculus')"
        :group="preCalculusGroup"
        :is-active="activeTab === GroupName.PreCalculus"
        @click="() => onChangeTab(GroupName.PreCalculus)"
      />
    </div>
    <label class="form-control w-full max-w-xs lg:mt-0 mt-4">
      <div class="label">
        <span class="label-text">
          {{ $t("landing.featuredApplications.tabs.pageSize") }}
        </span>
      </div>
      <select v-model="pageSize" class="select select-bordered">
        <option
          v-for="(option, optionIdx) in pageSizeOptions"
          :key="optionIdx"
          :value="option.value"
          :selected="option.value === pageSize"
        >
          {{ option.label }}
        </option>
      </select>
    </label>
  </div>
  <div
    class="mt-16 flex justify-center items-end flex-wrap lg:flex-row flex-col gap-8"
  >
    <template v-for="(item, idx) in pageItems" :key="idx">
      <ApplicationCard :item="item" :group="activeTab" />
    </template>
  </div>
  <div class="flex justify-between items-center mt-8 w-full">
    <div>
      <p class="text-sm text-neutral-600">
        {{ $t("showing") }}
        <span class="font-medium">{{ startSliceIndex + 1 }}</span>
        {{ $t("to") }}
        <span class="font-medium">
          {{
            groupItems.length > endSliceIndex
              ? endSliceIndex
              : groupItems.length
          }}
        </span>
        {{ $t("of") }}
        <span class="font-medium">
          {{ groupItems.length }}
        </span>
        {{ $t("results") }}
      </p>
    </div>
    <ApplicationPagination
      :active-page="activePage"
      :on-change-page="onChangePage"
      :page-count="pageCount"
    />
  </div>
</template>

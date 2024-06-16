<script setup lang="ts">
// Local Imports
import ApplicationCard from "~/components/landing/application-card.vue";
import GroupTab from "~/components/landing/group-tab.vue";
import { type AppGroup, GroupName } from "~/types";

interface Props {
  calculusGroup: AppGroup;
  preCalculusGroup: AppGroup;
  trigonometryGroup: AppGroup;
}

//
// Setup
//

defineProps<Props>();

//
// State
//

const activeTab = ref<GroupName>(GroupName.Calculus);
const activePage = ref<number>(1);
const pageSize = 6;

//
// Event Handlers
//

function onChangeTab(groupName: GroupName): void {
  activeTab.value = groupName;
  activePage.value = 1;
}

function onChangePage(page: number): void {
  activePage.value = page;
}
</script>

<template>
  <div class="text-base font-semibold leading-7">
    <div role="tablist" class="tabs tabs-bordered">
      <GroupTab
        :label="$t('group.calculus')"
        :group="calculusGroup"
        :is-active="activeTab === GroupName.Calculus"
        @click="() => onChangeTab(GroupName.Calculus)"
      />
      <div class="tab-content">
        <div class="mt-16 flex justify-start items-end">
          <template
            v-for="(item, idx) in Array.from(calculusGroup.values()).slice(
              (activePage - 1) * pageSize,
              activePage * pageSize,
            )"
            :key="idx"
          >
            <ApplicationCard :item="item" />
          </template>
        </div>
      </div>
      <GroupTab
        :label="$t('group.trigonometry')"
        :group="trigonometryGroup"
        :is-active="activeTab === GroupName.Trigonometry"
        @click="() => onChangeTab(GroupName.Trigonometry)"
      />
      <div class="tab-content">
        <div class="mt-16 flex justify-start items-end">
          <template
            v-for="(item, idx) in Array.from(trigonometryGroup.values()).slice(
              (activePage - 1) * pageSize,
              activePage * pageSize,
            )"
            :key="idx"
          >
            <ApplicationCard :item="item" />
          </template>
        </div>
      </div>
      <GroupTab
        :label="$t('group.preCalculus')"
        :group="preCalculusGroup"
        :is-active="activeTab === GroupName.PreCalculus"
        @click="() => onChangeTab(GroupName.PreCalculus)"
      />
      <div class="tab-content">
        <div class="mt-16 flex justify-start items-end">
          <template
            v-for="(item, idx) in Array.from(preCalculusGroup.values()).slice(
              (activePage - 1) * pageSize,
              activePage * pageSize,
            )"
            :key="idx"
          >
            <ApplicationCard :item="item" />
          </template>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between items-center mt-8 w-full">
    <div />
    <div class="join">
      <button
        class="join-item btn"
        :class="{ 'is-active': activePage === 1 }"
        @click="() => onChangePage(1)"
      >
        1
      </button>
      <button
        class="join-item btn"
        :class="{ 'is-active': activePage === 2 }"
        @click="() => onChangePage(2)"
      >
        2
      </button>
      <button
        class="join-item btn"
        :class="{ 'is-active': activePage === 3 }"
        @click="() => onChangePage(3)"
      >
        3
      </button>
      <button
        class="join-item btn"
        :class="{ 'is-active': activePage === 4 }"
        @click="() => onChangePage(4)"
      >
        4
      </button>
    </div>
  </div>
</template>

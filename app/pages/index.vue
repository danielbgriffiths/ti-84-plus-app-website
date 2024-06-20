<script lang="ts" setup>
// Local Imports
import * as DATA from "@/data";
import FeaturedApplications from "~/components/landing/featured-applications.vue";
import Overview from "~/components/landing/overview.vue";
import Info from "~/components/landing/info.vue";
import type { AppGroup } from "~/types";
import CallToActionDonate from "~/components/landing/call-to-action-donate.vue";
import CallToActionContact from "~/components/landing/call-to-action-contact.vue";

definePageMeta({
  title: "Home Page",
});

//
// State
//

const calculusGroup = computed<AppGroup>(() => DATA.calculusGroup);
const trigonometryGroup = computed<AppGroup>(() => DATA.trigGroup);
const preCalculusGroup = computed<AppGroup>(() => DATA.preCalculusGroup);
</script>

<template>
  <NuxtLayout>
    <Overview />

    <FeaturedApplications
      :calculus-group="calculusGroup"
      :trigonometry-group="trigonometryGroup"
      :pre-calculus-group="preCalculusGroup"
    />

    <CallToActionDonate />

    <Info :groups="[calculusGroup, trigonometryGroup, preCalculusGroup]" />

    <CallToActionContact />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    > div {
      margin: 1rem;
    }
  }
}
</style>

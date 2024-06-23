<script lang="ts" setup>
// Local Imports
import * as DATA from "@/data";
import FeaturedApplications from "~/components/landing/featured-applications.vue";
import Overview from "~/components/landing/overview.vue";
import Info from "~/components/landing/info.vue";
import type { AppGroup } from "~/types";
import CallToActionDonate from "~/components/landing/call-to-action-donate.vue";
import CallToActionContact from "~/components/landing/call-to-action-contact.vue";
import CompilerBreakdown from "~/components/landing/compiler-breakdown.vue";

definePageMeta({
  title: "TIPYTHON - TI-84 Scientific Calculator Python Applications",
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

    <CompilerBreakdown />

    <CallToActionContact />
  </NuxtLayout>
</template>

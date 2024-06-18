<script lang="ts" setup>
// Local Imports
import Heading from "~/components/application/heading.vue";
import DescriptionList from "~/components/application/description-list.vue";
import type { AppItem } from "~/types";
import { GroupName } from "~/types";
import * as DATA from "@/data";

//
// Composables
//

const route = useRoute();

//
// State
//

const groupName = computed<GroupName | undefined>(() => {
  switch (route.params.group) {
    case "calculus":
      return GroupName.Calculus;
    case "pre-calculus":
      return GroupName.PreCalculus;
    case "trigonometry":
      return GroupName.Trigonometry;
    default:
      return;
  }
});

const item = computed<AppItem | undefined>(() => {
  switch (route.params.group) {
    case "calculus":
      return DATA.calculusGroup.get(route.params.name);
    case "pre-calculus":
      return DATA.preCalculusGroup.get(route.params.name);
    case "trigonometry":
      return DATA.trigGroup.get(route.params.name);
    default:
      return;
  }
});

const isDownloading = ref<boolean>(false);

//
// Event Handlers
//

async function onDownload(): Promise<void> {
  isDownloading.value = true;

  try {
    const res = await fetch("/api/compiler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupName: "pre_calculus",
        scriptNames: ["least_common_multiple"],
      }),
    });

    const data = await res.json();
    const binaryString = atob(data.zipContent);
    const binaryLength = binaryString.length;
    const bytes = new Uint8Array(binaryLength);

    for (let i = 0; i < binaryLength; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: "application/zip" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${route.params.group}-${route.params.name}-download.zip`;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(() => {
      isDownloading.value = false;
    }, 500);
  }
}
</script>

<template>
  <NuxtLayout>
    <Heading :item="item" />
    <DescriptionList :item="item" :group-name="groupName" />
  </NuxtLayout>
</template>

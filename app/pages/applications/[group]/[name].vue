<script lang="ts" setup>
// Third Party Imports
import { asyncComputed } from "@vueuse/core";

// Local Imports
import Heading from "~/components/application/heading.vue";
import DescriptionList from "~/components/application/description-list.vue";
import type { AppItem, ApplicationMeta } from "~/types";
import { LOCAL_STORAGE_HAS_DOWNLOADED_KEY } from "~/constants";
import * as DATA from "@/data";

//
// Composables
//

const route = useRoute();

//
// State
//

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

const applicationMeta = asyncComputed<ApplicationMeta>(async () => {
  const res = await fetch(
    `/api/application-meta/${route.params.group}/${route.params.name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return await res.json();
});

//
// Lifecycle
//

onMounted(async () => {
  await fetch(
    `/api/application-meta/${route.params.group}/${route.params.name}/views`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        views: applicationMeta.value.views + 1,
      }),
    },
  );
});

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
        groupName: route.params.group,
        scriptNames: [route.params.name],
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

    await fetch(
      `/api/application-meta/${route.params.group}/${route.params.name}/downloads`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          views: applicationMeta.value.downloads + 1,
        }),
      },
    );

    const downloadedApps = localStorage.getItem(
      LOCAL_STORAGE_HAS_DOWNLOADED_KEY,
    );

    localStorage.setItem(
      LOCAL_STORAGE_HAS_DOWNLOADED_KEY,
      downloadedApps + "," + `${route.params.group}::${route.params.name}`,
    );
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
    <Heading :item="item" :application-meta="applicationMeta" />
    <DescriptionList :item="item" :application-meta="applicationMeta" />
  </NuxtLayout>
</template>

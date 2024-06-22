<script lang="ts" setup>
// Third Party Imports
import { useStorage } from "@vueuse/core";

// Local Imports
import Heading from "~/components/application/heading.vue";
import DescriptionList from "~/components/application/description-list.vue";
import { type AppItem, GroupName } from "~/types";
import { LOCAL_STORAGE_HAS_DOWNLOADED_KEY } from "~/constants";
import * as DATA from "@/data";
import CallToActionContact from "~/components/landing/call-to-action-contact.vue";

definePageMeta({
  title: "TIPYTHON - Python Application Page",
});

//
// Composables
//

const route = useRoute();
const applicationMetaApi = useApplicationMetaApi(
  route.params.group as GroupName,
  route.params.name as string,
);
const storage = useStorage(LOCAL_STORAGE_HAS_DOWNLOADED_KEY, "");

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

const hasDownloaded = computed<boolean>(() =>
  storage.value.includes(`${route.params.group}::${route.params.name}`),
);

//
// Lifecycle
//

onBeforeMount((): void => {
  applicationMetaApi
    .getApplicationMeta()
    .then(applicationMetaApi.updateViews)
    .catch(console.error);
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

    storage.value =
      storage.value + "," + `${route.params.group}::${route.params.name}`;
  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(() => {
      isDownloading.value = false;
    }, 500);

    await applicationMetaApi.updateDownloads();
  }
}

async function onUpdateRating(rating: number): Promise<void> {
  await applicationMetaApi.updateRatings(rating);
}
</script>

<template>
  <NuxtLayout>
    <Heading
      :item="item"
      :application-meta="applicationMetaApi.data.value"
      :has-downloaded="hasDownloaded"
      @update-rating="onUpdateRating"
    />
    <DescriptionList
      :item="item"
      :application-meta="applicationMetaApi.data.value"
      :has-downloaded="hasDownloaded"
      @download="onDownload"
    />
    <CallToActionContact />
  </NuxtLayout>
</template>

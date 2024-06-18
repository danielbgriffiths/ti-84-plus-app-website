<script lang="ts" setup>
// Third Party Imports
import highlight from "highlight.js";
import python from "highlight.js/lib/languages/python";
import { asyncComputed } from "@vueuse/core";

// Local Imports
import Heading from "~/components/application/heading.vue";
import DescriptionList from "~/components/application/description-list.vue";
import type { AppItem } from "~/types";
import { GroupName } from "~/types";
import * as DATA from "@/data";

//
// Setup
//

highlight.registerLanguage("python", python);

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

const downloadFile = asyncComputed<string>(async () => {
  if (!item.value) return "";

  const data: Response = await fetch(item.value!.uri + "/download.py");
  const blob = await data.blob();
  const text = await blob.text();

  return highlight.highlight(text, {
    language: "python",
  }).value;
});

const scriptFile = asyncComputed<string>(async () => {
  if (!item.value) return "";

  const data: Response = await fetch(item.value.uri + "/script.py");
  const blob = await data.blob();
  const text = await blob.text();

  return highlight.highlight(text, {
    language: "python",
  }).value;
});

const testFile = asyncComputed<string>(async () => {
  if (!item.value) return "";

  const data: Response = await fetch(item.value.uri + "/test.py");
  const blob = await data.blob();
  const text = await blob.text();

  return highlight.highlight(text, {
    language: "python",
  }).value;
});

const rating = ref<number>(4.5);
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

    <p>{{ item!.description }}</p>

    <div class="usage">
      <div>
        <h3>Usage</h3>
        <!--        <p>{{ item!.usage }}</p>-->
      </div>
    </div>

    <section class="code-section">
      <div class="code-section-left">
        <pre>
          <span>
            <code class="language-html" v-html="downloadFile" />
          </span>
        </pre>
      </div>
      <div class="code-section-right">
        <h3>Download File Contents</h3>
      </div>
    </section>

    <section class="code-section">
      <div class="code-section-left">
        <h3>Script File Contents</h3>
      </div>
      <div class="code-section-right">
        <pre>
          <span>
            <code class="language-html" v-html="scriptFile" />
          </span>
        </pre>
      </div>
    </section>

    <section class="code-section">
      <div class="code-section-left">
        <pre>
          <span>
            <code class="language-html" v-html="testFile" />
          </span>
        </pre>
      </div>
      <div class="code-section-right">
        <h3>Test File Contents</h3>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="css" scoped>
pre {
  color: #abb2bf;
  background: #282c34;
}

.usage {
}

.code-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.code-section:nth-child(even) {
  flex-wrap: wrap-reverse;
}

.code-section:nth-child(odd) {
  flex-wrap: wrap;
}

.code-section:nth-child(even) .code-section-left {
  width: 30%;
}

.code-section:nth-child(even) .code-section-right {
  width: 70%;
}

.code-section:nth-child(odd) .code-section-left {
  width: 70%;
}

.code-section:nth-child(odd) .code-section-right {
  width: 30%;
}
</style>

<script lang="ts" setup>
// Third Party Imports
import { useWindowScroll } from "@vueuse/core";

// Local Imports
import DownloadMock from "~/components/landing/compiler/download-mock.vue";
import LaunchExec from "~/components/landing/compiler/launch-exec.vue";
import RequestDownload from "~/components/landing/compiler/request-download.vue";
import DiffBundle from "~/components/landing/compiler/diff-bundle.vue";
import ReturnFile from "~/components/landing/compiler/return-file.vue";
import StepIcon from "~/components/landing/compiler/step-icon.vue";

//
// Setup
//

const windowScroll = useWindowScroll();

//
// State
//

const progress = ref<number>(0);
const containerRef = ref<HTMLElement | null>(null);

//
// Lifecycle
//

watch(
  () => windowScroll.y.value,
  (_nextY: number): void => {
    handleProgressBar();
  },
);

//
// Functions
//

function handleProgressBar(): void {
  if (!containerRef.value) return;

  const targetRect = containerRef.value.getBoundingClientRect();
  const targetHeight = containerRef.value.offsetHeight;

  if (window.innerHeight - targetRect.top <= 0) {
    progress.value = 0;
  } else if (targetHeight + targetRect.top - window.innerHeight <= 0) {
    progress.value = 100;
  } else {
    const scrolledPercentage =
      ((window.innerHeight - targetRect.top + window.innerHeight) /
        (window.innerHeight + targetHeight)) *
      100;

    progress.value = Math.min(Math.max(scrolledPercentage, 0), 100);
  }
}
</script>

<template>
  <div id="compiler-section" ref="containerRef" class="bg-neutral-100 py-24">
    <div class="mx-auto max-w-7xl pb-16 px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h1
          class="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl cursor-default no-select"
        >
          {{ $t("compiler.title") }}
        </h1>
        <p
          class="mt-6 text-lg leading-8 text-neutral-600 cursor-default no-select"
        >
          {{ $t("compiler.caption") }}
        </p>
      </div>
    </div>
    <ul class="timeline timeline-vertical mb-16">
      <!--
       Click Download Section
       -->
      <li>
        <div class="timeline-start">
          <DownloadMock />
        </div>
        <div class="timeline-middle">
          <StepIcon />
        </div>
        <div class="timeline-end">
          <span class="text-xl font-bold text-neutral-700">
            <span class="text-neutral-500 font-normal">Step 1:</span> Download
          </span>
        </div>
        <hr class="bg-primary" />
      </li>

      <!--
       Launch Rust Process
       -->
      <li>
        <hr class="bg-primary" />
        <div class="timeline-start"><LaunchExec /></div>
        <div class="timeline-middle">
          <StepIcon />
        </div>
        <div class="timeline-end">
          <span class="text-xl font-bold text-neutral-700">
            <span class="text-neutral-500 font-normal">Step 2:</span> Launch
            Rust Process
          </span>
        </div>
      </li>
    </ul>

    <ul class="timeline timeline-vertical mb-16">
      <!--
       HTTP Request [application].download.py Blob
       -->
      <li>
        <div class="timeline-start">
          <RequestDownload />
        </div>
        <div class="timeline-middle">
          <StepIcon />
        </div>
        <div class="timeline-end py-8">
          <span class="text-xl font-bold text-neutral-700">
            <span class="text-neutral-500 font-normal">Step 3:</span> HTTP
            Request Application
          </span>
        </div>
        <hr class="bg-primary" />
      </li>

      <!--
       Create Application Bundle
       -->
      <li>
        <hr class="bg-primary" />
        <div class="timeline-start">
          <DiffBundle />
        </div>
        <div class="timeline-middle">
          <StepIcon />
        </div>
        <div class="timeline-end py-8">
          <span class="text-xl font-bold text-neutral-700">
            <span class="text-neutral-500 font-normal">Step 4:</span> Create
            Application Bundle
          </span>
        </div>
      </li>
    </ul>

    <ul class="timeline timeline-vertical">
      <!--
       Return Compiled File
       -->
      <li>
        <div class="timeline-start py-8"><ReturnFile /></div>
        <div class="timeline-middle">
          <StepIcon />
        </div>
        <div class="timeline-end">
          <span class="text-xl font-bold text-neutral-700">
            <span class="text-neutral-500 font-normal">Step 5:</span> Provide
            Application Bundle
          </span>
        </div>
      </li>
    </ul>

    <progress
      class="progress shadow-xl w-[388px] bottom-[24px] left-[75%] sticky [&::-webkit-progress-value]:bg-[#38719f] [&::-webkit-progress-bar]:bg-neutral-200"
      :value="progress"
      max="100"
    />
  </div>
</template>

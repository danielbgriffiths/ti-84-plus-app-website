<script setup lang="ts">
// Third Party Imports
// import { useWindowScroll } from "@vueuse/core";

// Local Imports
// import QuestionMarkCircle from "~/components/icons/question-mark-circle.vue";
import CircleCheck from "~/components/icons/circle-check.vue";
// import CircleCheckSolid from "~/components/icons/circle-check-solid.vue";

// enum ScrollState {
//   Hidden = "hidden",
//   Partial = "partial",
//   Full = "full",
// }

// const is25PercentFromBottom = (entry) => {
//   const viewportHeight = window.innerHeight;
//   const thresholdPosition = viewportHeight * 0.75; // 25% from the bottom
//   return entry.boundingClientRect.bottom <= thresholdPosition;
// };
//
// const is60PercentFromBottom = (entry) => {
//   const viewportHeight = window.innerHeight;
//   const thresholdPosition = viewportHeight * 0.4; // 60% from the bottom
//   return entry.boundingClientRect.bottom <= thresholdPosition;
// };

//
// State
//

// const state = ref<ScrollState>(ScrollState.Hidden);
// const iconRef = ref<HTMLElement | null>(null);

//
// Composables
//

// const windowScroll = useWindowScroll();

// Lifecycle
//

// watch(
//   () => windowScroll.y.value,
//   (nextY: number): void => {
//     console.log("nextY", nextY);
//     console.log(
//       "entry.boundingClientRect: ",
//       iconRef.value?.getBoundingClientRect(),
//     );
//     console.log("window.innerHeight: ", window.innerHeight);
//   },
// );
</script>

<template>
  <div ref="iconRef">
    <!--    <QuestionMarkCircle v-if="state === ScrollState.Hidden" />-->
    <CircleCheck />
    <!--    <CircleCheckSolid v-else-if="state === ScrollState.Full" />-->
  </div>
</template>

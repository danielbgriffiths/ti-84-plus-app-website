<script lang="ts" setup>
interface Props {
  activePage: number;
  onChangePage: (page: number) => void;
  pageCount: number;
}

//
// Setup
//

defineProps<Props>();
</script>

<template>
  <div class="join">
    <button
      v-for="pageIdx in pageCount"
      :key="pageIdx"
      class="join-item btn"
      :class="{ 'btn-active': activePage === pageIdx }"
      @click="() => onChangePage(pageIdx)"
    >
      {{ pageIdx }}
    </button>
  </div>
</template>

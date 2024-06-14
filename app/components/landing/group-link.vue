<script lang="ts" setup>
interface Props {
  label: string;
  group: Map<string, any>;
}

//
// Setup
//

defineProps<Props>();
</script>

<template>
  <NuxtLink class="btn no-select text-neutral-700">
    {{ label }}
    <div class="badge badge-primary">
      <div class="tooltip" :data-tip="`${group.size} ${label} Applications`">
        <span class="text-neutral-200">+4</span>
      </div>
    </div>
  </NuxtLink>
</template>

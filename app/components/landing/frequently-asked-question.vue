<script lang="ts" setup>
interface Props {
  slug: string;
  question: string;
}

//
// Setup
//

defineProps<Props>();
</script>

<template>
  <div class="collapse collapse-plus bg-base-100 mb-2">
    <input type="radio" name="faq_accordion" :value="slug" />
    <div class="collapse-title text-xl font-medium">
      {{ question }}
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>

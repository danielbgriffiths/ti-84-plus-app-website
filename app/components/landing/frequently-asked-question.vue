<script lang="ts" setup>
interface Props {
  slug: string;
  question: {
    question: string;
    answer: string;
  };
}

//
// Setup
//

defineProps<Props>();
</script>

<template>
  <div class="collapse collapse-plus bg-base-100 mb-2">
    <input type="radio" :id="slug" name="faq_accordion" :value="slug" />
    <label :for="slug" class="collapse-title text-xl font-medium">
      <span class="sr-only">{{ slug }}</span>
      {{ question.question }}
    </label>
    <div class="collapse-content">
      {{ question.answer }}
    </div>
  </div>
</template>

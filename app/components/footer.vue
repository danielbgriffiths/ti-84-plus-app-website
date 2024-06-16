<script setup lang="ts">
//
// Setup
//

const i18n = useI18n();

//
// State
//

const copyrightText = computed<string>(() => {
  return i18n.t("footer.copyRight", { year: new Date().getFullYear() });
});
</script>

<template>
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p>
        {{ copyrightText }}
        <a href="https://github.com/danielbgriffiths">Daniel Griffiths</a>
      </p>
    </aside>
  </footer>
</template>

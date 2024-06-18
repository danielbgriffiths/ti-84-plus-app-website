<script setup lang="ts"></script>

<template>
  <Header />
  <main class="mt-[50px]">
    <slot />
  </main>
  <Footer />
</template>

<style lang="css" scoped>
main {
  min-height: calc(100vh - 52px - 50px);
}
</style>

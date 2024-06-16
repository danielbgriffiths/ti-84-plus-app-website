<script setup lang="ts">
//
// State
//

const hasBackground = ref<boolean>(false);
const navRef = ref<HTMLElement | null>(null);

//
// Lifecycle
//

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  onScroll();

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
});

watch(hasBackground, (nextValue: boolean) => {
  if (!navRef.value) return;

  if (nextValue) {
    navRef.value.style.backgroundColor = "#ffffffe0";
    navRef.value.style.height = "50px";
  } else {
    navRef.value.style.backgroundColor = "transparent";
    navRef.value.style.height = "80px";
  }
});

//
// Event Handlers
//

function onScroll(): void {
  if (window.scrollY > 120 && !hasBackground.value) {
    hasBackground.value = true;
  } else if (window.scrollY <= 120 && hasBackground.value) {
    hasBackground.value = false;
  }
}
</script>

<template>
  <nav
    ref="navRef"
    class="flex items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <NuxtLink to="/" class="-m-1.5 p-1.5">
        <span class="sr-only">TI-84 Python</span>
        <img class="h-8 w-auto" src="/img.png" alt="Python Logo" />
      </NuxtLink>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <NuxtLink
        href="#applications-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
      >
        {{ $t("navigation.applications") }}
      </NuxtLink>
      <NuxtLink
        href="#compiler-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
      >
        {{ $t("navigation.compiler") }}
      </NuxtLink>
      <NuxtLink
        href="#info-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
      >
        {{ $t("navigation.info") }}
      </NuxtLink>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <NuxtLink
        class="text-sm font-semibold leading-6 text-neutral-700 flex"
        to="/donate"
      >
        {{ $t("navigation.donate") }} <Donate class="ml-2" />
      </NuxtLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  transition-duration: 0.15s;
  transition-property: height, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

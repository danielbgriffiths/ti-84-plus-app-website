<script setup lang="ts">
// Local Imports
import Donate from "~/components/icons/donate.vue";
import Globe from "~/components/icons/globe.vue";
import { getLocalCodes, LOCAL_STORAGE_LOCALE_KEY } from "~/constants";
import type { LocaleCode } from "~/types";

//
// Setup
//

const i18n = useI18n();

const LOCALE_TEXTS = getLocalCodes(i18n.t);

//
// State
//

const hasBackground = ref<boolean>(false);
const navRef = ref<HTMLElement | null>(null);
const activeLocaleText = computed<string>(
  () => LOCALE_TEXTS[i18n.locale.value as LocaleCode]!,
);

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

//
// Event Handlers
//

function onScroll(): void {
  if (!navRef.value) return;

  if (window.scrollY > 120 && !hasBackground.value) {
    hasBackground.value = true;
    navRef.value.style.backgroundColor = "#ffffffe0";
  } else if (window.scrollY <= 120 && hasBackground.value) {
    hasBackground.value = false;
    navRef.value.style.backgroundColor = "transparent";
  }
}

function onSelectLocale(locale: string): void {
  i18n.locale.value = locale;
  localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, locale);
}
</script>

<template>
  <nav
    ref="navRef"
    class="flex items-center justify-between px-6 lg:px-8"
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
        to="/#applications-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
      >
        {{ $t("navigation.applications") }}
      </NuxtLink>
      <NuxtLink
        to="/#compiler-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
      >
        {{ $t("navigation.compiler") }}
      </NuxtLink>
      <NuxtLink
        to="/#info-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
      >
        {{ $t("navigation.info") }}
      </NuxtLink>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <div class="dropdown dropdown-bottom">
        <div tabindex="0" role="button" class="btn btn-ghost mr-2">
          <Globe />
          {{ activeLocaleText }}
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li
            v-for="item in Object.keys(LOCALE_TEXTS)"
            :class="{ 'is-active': i18n.locale.value === item }"
          >
            <a @click="() => onSelectLocale(item)">{{ LOCALE_TEXTS[item] }}</a>
          </li>
        </ul>
      </div>
      <NuxtLink
        class="text-sm font-semibold leading-6 text-neutral-700 flex items-center"
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

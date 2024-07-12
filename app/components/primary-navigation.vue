<script setup lang="ts">
// Third Party Imports
import { useElementSize } from "@vueuse/core";

// Local Imports
import Donate from "~/components/icons/donate.vue";
import Globe from "~/components/icons/globe.vue";
import Hamburger from "~/components/icons/hamburger.vue";
import {
  getLocalCodes,
  LOCAL_STORAGE_LOCALE_KEY,
  BREAKPOINTS,
} from "~/constants";
import type { LocaleCode } from "~/types";
import CircleCheck from "~/components/icons/circle-check.vue";

//
// Setup
//

const i18n = useI18n();
const LOCALE_TEXTS = getLocalCodes(i18n.t);
const route = useRoute();

//
// State
//

const viewportWidth = ref<number>(BREAKPOINTS.DESKTOP);
const hasBackground = ref<boolean>(false);
const navRef = ref<HTMLElement | null>(null);
const activeLocaleText = computed<string>(
  () => LOCALE_TEXTS[i18n.locale.value as LocaleCode]!,
);
const isMobileOpen = ref<boolean>(false);

//
// Lifecycle
//

onMounted((): void => {
  watch(useElementSize(document.body).width, (size: number): void => {
    viewportWidth.value = size;
  });

  window.addEventListener("scroll", onScroll);
  onScroll();
});

onBeforeUnmount((): void => {
  window.removeEventListener("scroll", onScroll);
});

watch(viewportWidth, (size: number): void => {
  if (size < BREAKPOINTS.DESKTOP || !isMobileOpen.value) return;
  isMobileOpen.value = false;
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

function onToggleMobile(): void {
  isMobileOpen.value = !isMobileOpen.value;
}
</script>

<template>
  <nav
    ref="navRef"
    class="flex items-center justify-between pl-4 lg:pl-8"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <NuxtLink to="/" class="-m-1.5 p-1.5 flex justify-start items-center">
        <span class="sr-only">TIPython</span>
        <NuxtImg
          class="h-8 w-auto mr-2"
          src="/img.png"
          alt="TIPython Website uses Python Logo"
          width="32"
          height="32"
        />
        <span class="font-bold text-neutral-700">TIPython</span>
      </NuxtLink>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <NuxtLink
        to="/#applications-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
        :class="{
          'is-active-link': route.hash.includes('applications-section'),
        }"
      >
        {{ $t("navigation.applications") }}
      </NuxtLink>
      <NuxtLink
        to="/#compiler-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
        :class="{
          'is-active-link': route.hash.includes('compiler-section'),
        }"
      >
        {{ $t("navigation.compiler") }}
      </NuxtLink>
      <NuxtLink
        to="/#info-section"
        class="text-sm font-semibold leading-6 text-neutral-700"
        :class="{
          'is-active-link': route.hash.includes('info-section'),
        }"
      >
        {{ $t("navigation.info") }}
      </NuxtLink>
    </div>
    <div class="flex flex-1 justify-end lg:pr-8 pr-4">
      <div class="dropdown dropdown-bottom">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost text-neutral-700 lg:mr-2"
        >
          <Globe :is-content="false" />
          {{ viewportWidth >= BREAKPOINTS.DESKTOP ? activeLocaleText : "" }}
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu py-2 shadow bg-base-100 rounded-box w-52"
        >
          <li
            v-for="item in Object.keys(LOCALE_TEXTS)"
            :class="{ 'is-active': i18n.locale.value === item }"
          >
            <span
              class="pl-[0.5rem] pr-[0.5rem]"
              @click="() => onSelectLocale(item)"
              :aria-label="`Change locale to ${LOCALE_TEXTS[item]}`"
            >
              <CircleCheck v-if="i18n.locale.value === item" />
              {{ LOCALE_TEXTS[item] }}
            </span>
          </li>
        </ul>
      </div>
      <NuxtLink
        class="text-sm leading-6 font-semibold text-neutral-700 flex items-center justify-center min-w-[60px]"
        :class="{ 'is-active-link': route.path === '/donate' }"
        to="/donate"
      >
        {{
          viewportWidth >= BREAKPOINTS.DESKTOP ? $t("navigation.donate") : ""
        }}
        <Donate :class="{ 'ml-1': viewportWidth >= BREAKPOINTS.DESKTOP }" />
      </NuxtLink>
      <div class="lg:hidden">
        <button class="btn btn-ghost" @click="onToggleMobile">
          <Hamburger />
        </button>
      </div>
    </div>
  </nav>
  <div v-if="isMobileOpen" class="lg:hidden" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div
      class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-base-300 sm:max-w-sm sm:ring-1 sm:ring-neutral-700/10"
    >
      <div class="pb-6 px-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5 flex justify-start items-center">
            <span class="sr-only">TIPython</span>
            <NuxtImg
              class="h-8 w-auto mr-2"
              src="/img.png"
              alt="TIPython Website uses Python Logo"
              width="32"
              height="32"
            />
            <span class="font-bold text-neutral-700">TIPython</span>
          </NuxtLink>
          <button
            type="button"
            class="btn btn-ghost text-gray-700"
            @click="onToggleMobile"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-neutral-500/10">
            <div class="space-y-2 py-6">
              <a
                href="/#applications-section"
                class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-neutral-700 hover:bg-base-100"
                :class="{
                  'is-active-mobile-link': route.hash.includes(
                    'applications-section',
                  ),
                }"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-base-200 group-hover:bg-base-200"
                >
                  <svg
                    class="h-6 w-6 text-neutral-700 group-hover:text-[#3772a1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                Applications
              </a>
              <a
                href="/#compiler-section"
                class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-neutral-700 hover:bg-base-100"
                :class="{
                  'is-active-mobile-link':
                    route.hash.includes('compiler-section'),
                }"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-base-200 group-hover:bg-base-200"
                >
                  <svg
                    class="h-6 w-6 text-neutral-700 group-hover:text-[#3772a1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                Compiler
              </a>
              <a
                href="/#info-section"
                class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-neutral-700 hover:bg-base-100"
                :class="{
                  'is-active-mobile-link': route.hash.includes('info-section'),
                }"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-base-200 group-hover:bg-base-200"
                >
                  <svg
                    class="h-6 w-6 text-neutral-700 group-hover:text-[#3772a1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                Info
              </a>
              <a
                href="/donate"
                class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-neutral-700 hover:bg-base-100"
                :class="{
                  'is-active-mobile-link': route.path.includes('donate'),
                }"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-base-200 group-hover:bg-base-200"
                >
                  <svg
                    class="h-6 w-6 text-neutral-700 group-hover:text-[#3772a1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  transition-duration: 0.15s;
  transition-property: height, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.is-active-link {
  color: #3772a1;
}

.is-active-mobile-link {
  background-color: #ededed;
}

.is-active-mobile-link svg {
  color: #3772a1;
}
</style>

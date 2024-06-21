<script lang="ts" setup>
// Local Imports
import CircleCheck from "~/components/icons/circle-check.vue";
import PaymentModal from "~/components/donate/payment-modal.vue";
import { CurrencyCode } from "~/types";
import { CURRENCY_SYMBOLS, getCurrencyTexts } from "~/constants";

definePageMeta({
  title: "Donation Page",
});

//
// Setup
//

const i18n = useI18n();

const CURRENCY_TEXTS = getCurrencyTexts(i18n.t);

//
// State
//

const amount = ref<number>(50);
const currencyCode = ref<CurrencyCode>(CurrencyCode.USD);
const currencySymbol = computed<string>(
  () => CURRENCY_SYMBOLS[currencyCode.value as CurrencyCode],
);
const isOpen = ref<boolean>(false);

//
// Event Handlers
//

function onOpenPaymentModal(): void {
  isOpen.value = true;
}
</script>

<template>
  <NuxtLayout>
    <div class="bg-white py-24 sm:py-32 min-height-layout">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl cursor-default no-select"
          >
            {{ $t("donate.title") }}
          </h2>
          <p
            class="mt-6 text-lg leading-8 text-neutral-600 cursor-default no-select"
          >
            {{ $t("donate.caption") }}
          </p>
        </div>
        <div
          class="bg-white mx-auto mt-16 max-w-2xl shadow-lg rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div class="p-8 sm:p-10 lg:flex-auto">
            <h3
              class="text-2xl font-bold tracking-tight text-neutral-700 cursor-default no-select"
            >
              {{ $t("donate.secondary.title") }}
            </h3>
            <p
              class="mt-6 text-base leading-7 text-neutral-500 cursor-default no-select"
            >
              {{ $t("donate.secondary.caption") }}
            </p>
            <div class="mt-10 flex items-center gap-x-4">
              <h4
                class="flex-none text-sm font-semibold leading-6 text-primary cursor-default no-select"
              >
                {{ $t("donate.content.title") }}
              </h4>
              <div class="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-neutral-500 sm:grid-cols-2 sm:gap-6"
            >
              <li class="flex items-center gap-x-3 cursor-default no-select">
                <CircleCheck />
                {{ $t("donate.content.openSource") }}
              </li>
              <li class="flex items-center gap-x-3 cursor-default no-select">
                <CircleCheck />
                {{ $t("donate.content.visibility") }}
              </li>
              <li class="flex items-center gap-x-3 cursor-default no-select">
                <CircleCheck />
                {{ $t("donate.content.speed") }}
              </li>
              <li class="flex items-center gap-x-3 cursor-default no-select">
                <CircleCheck />
                {{ $t("donate.content.future") }}
              </li>
            </ul>
          </div>
          <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div
              class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-neutral-700/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
            >
              <div class="mx-auto px-2">
                <p
                  class="text-base font-semibold text-neutral-600 cursor-default no-select"
                >
                  {{ $t("donate.chooseYourDonation") }}
                </p>
                <p class="mt-6 mb-2 flex items-center justify-between gap-x-2">
                  <span
                    class="text-5xl font-bold tracking-tight text-neutral-700 cursor-pointer min-w-[144px]"
                  >
                    {{ currencySymbol }}{{ amount }}
                  </span>
                  <span
                    class="text-sm font-semibold leading-6 tracking-wide text-neutral-400 cursor-default no-select"
                  >
                    <select
                      v-model="currencyCode"
                      class="select select-ghost max-w-xs"
                    >
                      <option
                        v-for="item in Object.keys(CURRENCY_SYMBOLS)"
                        :key="item"
                        :value="item"
                        :selected="item === currencyCode"
                      >
                        {{ CURRENCY_SYMBOLS[item] }} {{ CURRENCY_TEXTS[item] }}
                      </option>
                    </select>
                  </span>
                </p>
                <input
                  v-model="amount"
                  type="range"
                  min="1"
                  max="1000"
                  class="range range-xs"
                />
                <button
                  class="mt-10 block w-full btn"
                  @click="onOpenPaymentModal"
                >
                  {{ $t("donate.donate") }}
                </button>
                <p
                  class="mt-6 text-xs leading-5 text-neutral-400 cursor-default no-select"
                >
                  {{ $t("donate.policyText") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
  <PaymentModal :is-open="isOpen" @close="isOpen = false" />
</template>

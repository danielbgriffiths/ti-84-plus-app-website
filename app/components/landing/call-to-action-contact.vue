<script lang="ts" setup>
// Local Imports
import CodeBracket from "~/components/icons/code-bracket.vue";
import SquareStack from "~/components/icons/square-stack.vue";
import CtaContactForm from "~/components/landing/cta-contact-form.vue";
</script>

<template>
  <div
    class="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
      >
        <div class="max-w-xl lg:max-w-lg">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl"
          >
            {{ $t("landing.contact.title") }}
          </h2>
          <p class="mt-4 text-lg leading-8 text-neutral-500">
            {{ $t("landing.contact.caption") }}
          </p>
          <CtaContactForm />
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <dt
              class="flex items-center justify-start mt-4 font-semibold text-neutral-600"
            >
              <div class="rounded-md bg-white/5 mr-1 ring-1 ring-white/10">
                <CodeBracket class="h-6 w-6" />
              </div>
              {{ $t("landing.contact.highlight.openSource.title") }}
            </dt>
            <dd class="mt-2 leading-7 text-neutral-500">
              {{ $t("landing.contact.highlight.openSource.caption") }}
            </dd>
          </div>
          <div class="flex flex-col items-start">
            <dt
              class="flex items-center justify-start mt-4 font-semibold text-neutral-600"
            >
              <div class="rounded-md bg-white/5 mr-1 ring-1 ring-white/10">
                <SquareStack class="h-6 w-6" />
              </div>
              {{ $t("landing.contact.highlight.requests.title") }}
            </dt>
            <dd class="mt-2 leading-7 text-neutral-500">
              {{ $t("landing.contact.highlight.requests.caption") }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div
      class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      aria-hidden="true"
    >
      <div
        class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ffd242] to-[#3772a1] opacity-30"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
  </div>
</template>

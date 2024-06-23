<script setup lang="ts">
// Local Imports
import LateralSliders from "~/components/icons/lateral-sliders.vue";
import Rocket from "~/components/icons/rocket.vue";
import Globe from "~/components/icons/globe.vue";
</script>

<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2
              class="text-base font-semibold leading-7 text-neutral-600 cursor-default no-select"
            >
              {{ $t("landing.overview.title") }}
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl cursor-default no-select"
            >
              {{ $t("landing.overview.caption") }}
            </p>
            <p
              class="mt-6 text-lg leading-8 text-neutral-600 cursor-default no-select"
            >
              {{ $t("landing.overview.description") }}
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
            >
              <div class="relative pl-9">
                <dt
                  class="flex justify-start items-center font-semibold text-neutral-700 cursor-default no-select"
                >
                  <LateralSliders />
                  {{ $t("landing.overview.tested.title") }}
                </dt>
                <dd class="inline text-neutral-500 cursor-default no-select">
                  {{ $t("landing.overview.tested.description") }}
                </dd>
              </div>
              <div class="relative pl-9">
                <dt
                  class="flex justify-start items-center font-semibold text-neutral-700 cursor-default no-select"
                >
                  <Rocket />
                  {{ $t("landing.overview.lean.title") }}
                </dt>
                <dd class="inline text-neutral-500 cursor-default no-select">
                  {{ $t("landing.overview.lean.description") }}
                </dd>
              </div>
              <div class="relative pl-9">
                <dt
                  class="flex justify-start items-center font-semibold text-neutral-700 cursor-default no-select"
                >
                  <Globe />
                  {{ $t("landing.overview.comprehensive.title") }}
                </dt>
                <dd class="inline text-neutral-500 cursor-default no-select">
                  {{ $t("landing.overview.comprehensive.description") }}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          class="mockup-code w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 pb-0"
        >
          <code class="language-python">
            <pre data-prefix="1"># Babylonian Method</pre>
            <pre data-prefix="2">def sqrt(n, tolerance=1e-10):</pre>
            <pre data-prefix="3">    if n < 0:</pre>
            <pre data-prefix="4">
        raise ValueError("Cannot compute the square root of a negative number")</pre
            >
            <pre data-prefix="5">    if n == 0:</pre>
            <pre data-prefix="6">        return 0</pre>
            <pre data-prefix="7">    x = n / 2</pre>
            <pre data-prefix="8">    while True:</pre>
            <pre data-prefix="9">        next_x = 0.5 * (x + n / x)</pre>
            <pre data-prefix="10">        if abs(x - next_x) < tolerance:</pre>
            <pre data-prefix="11">            return next_x</pre>
            <pre data-prefix="12">        x = next_x</pre>
            <pre data-prefix="13"></pre>
            <pre data-prefix="14"># Nilakantha Series</pre>
            <pre data-prefix="15">def pi(iterations=100000):</pre>
            <pre data-prefix="16">    res = 3.0</pre>
            <pre data-prefix="17">    sign = 1</pre>
            <pre data-prefix="18">
    for i in range(2, 2 + 2 * iterations, 2):</pre
            >
            <pre data-prefix="19">
        res += sign * 4 / (i * (i + 1) * (i + 2))</pre
            >
            <pre data-prefix="20">        sign *= -1</pre>
            <pre data-prefix="21">    return res</pre>
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

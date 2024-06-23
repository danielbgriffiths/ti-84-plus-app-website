<script lang="ts" setup>
// Local Imports
import LongRightArrow from "~/components/icons/long-right-arrow.vue";
</script>

<template>
  <div class="bg-neutral-50">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-base-300 pl-6 pr-0 pt-16 shadow-2xl sm:rounded-3xl sm:pl-16 md:pt-24 lg:flex lg:gap-x-20 lg:pl-24 lg:pt-0"
      >
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="1"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#ffd242" />
              <stop offset="1" stop-color="#3772a1" />
            </radialGradient>
          </defs>
        </svg>
        <div
          class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
        >
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl cursor-default no-select"
          >
            {{ $t("landing.donate.title1") }}<br />{{
              $t("landing.donate.title2")
            }}
          </h2>
          <p
            class="mt-6 text-lg leading-8 text-neutral-500 cursor-default no-select"
          >
            {{ $t("landing.donate.caption") }}
          </p>
          <div
            class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
          >
            <NuxtLink to="/donate" class="btn">
              {{ $t("landing.donate.donate") }}
            </NuxtLink>
            <NuxtLink
              href="https://github.com/danielbgriffiths/ti-84-plus-python-applications"
              target="_blank"
              class="btn btn-ghost"
            >
              {{ $t("landing.donate.repository") }}
              <LongRightArrow />
            </NuxtLink>
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8">
          <div
            class="mockup-code absolute left-0 top-0 w-[40rem] max-w-none rounded-md shadow-xl bg-white/5 ring-1 ring-neutral/10"
          >
            <code class="language-html">
              <pre data-prefix="1">fn main() {</pre>
              <pre data-prefix="1">    dotenv().ok();</pre>
              <pre data-prefix="2"></pre>
              <pre data-prefix="3">    let args = gather_args();</pre>
              <pre data-prefix="4">    let mut files = Vec::new();</pre>
              <pre data-prefix="5"></pre>
              <pre data-prefix="6">
    for script_name in args[2].split(',').map(|s| s.trim()) {</pre
              >
              <pre data-prefix="7">
         let paths = describe_paths(&args[1], &script_name.to_string());</pre
              >
              <pre data-prefix="8">
         let bundled_output_lines = build_bundle(&paths);</pre
              >
              <pre data-prefix="9"></pre>
              <pre data-prefix="10">         files.push(FileObject {</pre>
              <pre data-prefix="11">
             script_name: script_name.to_string(),</pre
              >
              <pre data-prefix="12">
             contents: bundled_output_lines,</pre
              >
              <pre data-prefix="13">         })</pre>
              <pre data-prefix="14">    }</pre>
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

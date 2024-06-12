<script lang="ts" setup>
// Third Party Imports
import { useScroll } from "@vueuse/core";

// Local Imports
import * as DATA from "@/data";

//
// Hooks
//

// const scroll = useScroll();
</script>

<template>
  <NuxtLayout>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2
                class="text-base font-semibold leading-7 text-primary cursor-default no-select"
              >
                Learn Faster
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl cursor-default no-select"
              >
                A better workflow
              </p>
              <p
                class="mt-6 text-lg leading-8 text-neutral-600 cursor-default no-select"
              >
                Leverage Python scripts in your calculator to solve problems,
                double check work, and learn faster.
              </p>
              <dl
                class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
              >
                <div class="relative pl-9">
                  <dt
                    class="flex justify-start items-center font-semibold text-neutral-700 cursor-default no-select"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="size-4 mr-2 text-neutral-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                      />
                    </svg>
                    Tested
                  </dt>
                  <dd class="inline text-neutral-500 cursor-default no-select">
                    Unit Test coverage with open source visibility
                  </dd>
                </div>
                <div class="relative pl-9">
                  <dt
                    class="flex justify-start items-center font-semibold text-neutral-700 cursor-default no-select"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="size-4 mr-2 text-neutral-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                    Lean
                  </dt>
                  <dd class="inline text-neutral-500 cursor-default no-select">
                    Small downloaded file sizes with no dependencies
                  </dd>
                </div>
                <div class="relative pl-9">
                  <dt
                    class="flex justify-start items-center font-semibold text-neutral-700 cursor-default no-select"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="size-4 mr-2 text-neutral-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                      />
                    </svg>
                    Comprehensive
                  </dt>
                  <dd class="inline text-neutral-500 cursor-default no-select">
                    The largest archive of Python scripts for the TI-84 Plus CE
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div
            class="mockup-code w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          >
            <code class="language-html" v-html="''" />
          </div>
        </div>
      </div>
    </div>

    <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd242] to-[#3772a1] opacity-20"
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
        ></div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd242] to-[#3772a1] opacity-20"
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
        ></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-4xl font-bold tracking-tight text-neutral-700 sm:text-6xl no-select cursor-default"
          >
            Featured Applications
          </h2>
          <p class="mt-6 text-lg leading-8 text-base no-select cursor-default">
            A featured set of applications for the TI-84 Plus CE calculator.
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"
          >
            <NuxtLink class="btn no-select text-neutral-700">
              Calculus
              <div class="badge badge-primary">
                <div class="tooltip" data-tip="4 Calculus Applications">
                  <span class="text-neutral-200">+4</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/scripts/trigonometry"
              class="btn no-select text-neutral-700"
            >
              Trigonometry
              <div class="badge badge-primary">
                <div class="tooltip" data-tip="12 Trigonometry Applications">
                  <span class="text-neutral-200">+12</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/scripts/pre_calculus"
              class="btn no-select text-neutral-700"
            >
              Pre Calculus
              <div class="badge badge-primary">
                <div class="tooltip" data-tip="14 Pre Calculus Applications">
                  <span class="text-neutral-200">+14</span>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="mt-16 flex justify-start items-end">
            <div
              class="mr-4 h-full"
              v-for="(item, idx) in Array.from(
                DATA.calculusGroup.values(),
              ).slice(0, 3)"
              :key="idx"
            >
              <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2
                    class="card-title text-neutral-700 no-select cursor-default"
                  >
                    {{ item.title }}
                  </h2>
                  <p class="text-neutral-600 no-select cursor-default">
                    {{ item.description.slice(0, 60) }} ...
                  </p>
                  <div class="card-actions justify-end">
                    <NuxtLink
                      :to="`/scripts/calculus/${item.name}`"
                      class="btn btn-ghost text-neutral-400 no-select"
                    >
                      Get Application

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4 text-neutral-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink to="/scripts" class="btn btn-ghost">
              See More

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl
          class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"
        >
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <div class="tooltip" data-tip="Over 40 Applications in the Library">
              <span
                class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl cursor-default no-select"
              >
                40+
              </span>
            </div>

            <span
              class="text-base leading-7 text-gray-600 cursor-default no-select"
              >Applications</span
            >
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <div
              class="tooltip"
              data-tip="The Applications Span at Least 3 Fields of Mathematics"
            >
              <span
                class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl cursor-default no-select"
              >
                3+
              </span>
            </div>

            <span
              class="text-base leading-7 text-gray-600 cursor-default no-select"
            >
              Fields of Mathematics
            </span>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <div
              class="tooltip"
              data-tip="Hundreds of people are using the applications right now!"
            >
              <span
                class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
              >
                100+
              </span>
            </div>

            <span
              class="text-base leading-7 text-gray-600 cursor-default no-select"
              >of Users</span
            >
          </div>
        </dl>
      </div>

      <div class="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div class="mx-auto mb-16">
          <h2
            class="text-4xl text-center font-bold tracking-tight text-neutral-700 sm:text-6xl no-select cursor-default"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div class="collapse collapse-plus bg-base-100 mb-2">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            How do I use the Python applications with my TI-84 Plus CE
            calculator?
          </div>
          <div class="collapse-content">
            <p class="cursor-default no-select">hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            Is there a size limit to the Python applications?
          </div>
          <div class="collapse-content">
            <p class="cursor-default no-select">hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            Is it possible to use Python package dependencies in the
            applications?
          </div>
          <div class="collapse-content">
            <p class="cursor-default no-select">hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            How many applications can I upload onto my computer?
          </div>
          <div class="collapse-content">
            <p class="cursor-default no-select">hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            Am I allowed to use these applications in class?
          </div>
          <div class="collapse-content">
            <p class="cursor-default no-select">hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            How are you able to verify the accuracy of the Python applications?
          </div>
          <div class="collapse-content">
            <p class="cursor-default no-select">hello</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-neutral-50">
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          class="relative isolate overflow-hidden bg-base-300 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
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
              Help grow the library.<br />Share your insights.
            </h2>
            <p
              class="mt-6 text-lg leading-8 text-neutral-500 cursor-default no-select"
            >
              Donate today or access the Github repository to contribute to the
              library.
            </p>
            <div
              class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
            >
              <NuxtLink to="/donate" class="btn"> Donate </NuxtLink>
              <NuxtLink
                href="https://github.com/danielbgriffiths/ti-84-plus-python-applications"
                class="btn btn-ghost"
              >
                Repository
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4 text-neutral-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="relative mt-16 h-80 lg:mt-8">
            <div
              class="mockup-code absolute left-0 top-0 w-[30rem] max-w-none rounded-md shadow-xl bg-white/5 ring-1 ring-neutral/10"
            >
              <pre data-prefix="$"><code>npm i daisyui</code></pre>
              <pre
                data-prefix=">"
                class="text-warning"
              ><code>installing...</code></pre>
              <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-24">
      <ul class="timeline timeline-vertical">
        <li>
          <div class="timeline-start">Fetch from browser</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">
            <div class="mockup-browser mx-auto max-w-7xl border bg-base-300">
              <div class="mockup-browser-toolbar">
                <div class="input">
                  https://raw.githubusercontent.com/danielbgriffiths/ti-84-plus-python-applications/main/trigonometry/law_of_cosines/download.py
                </div>
              </div>
              <div class="flex justify-start px-4 py-4 bg-base-200">
                <code>
                  <pre>from common.helpers import get_float_input</pre>
                  <pre></pre>
                  <pre>
from trigonometry.law_of_cosines.script import law_of_cosines</pre
                  >
                  <pre></pre>
                  <pre>print(</pre>
                  <pre>    law_of_cosines(</pre>
                  <pre>        get_float_input("Enter side A: "),</pre>
                  <pre>        get_float_input("Enter side B: "),</pre>
                  <pre>
        get_float_input("Enter angle C (in degrees): ")</pre
                  >
                  <pre>    )</pre>
                  <pre>)</pre>
                </code>
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">Launch Rust compiler</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">
            <div
              class="mockup-code w-[30rem] max-w-none rounded-md shadow-xl bg-white/5 ring-1 ring-neutral/10"
            >
              <pre data-prefix="$"><code>npm i daisyui</code></pre>
              <pre
                data-prefix=">"
                class="text-warning"
              ><code>installing...</code></pre>
              <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">
            from common.helpers import get_float_input
          </div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">
            <div
              class="mockup-code w-[30rem] max-w-none rounded-md shadow-xl bg-white/5 ring-1 ring-neutral/10"
            >
              <pre data-prefix="$"><code>npm i daisyui</code></pre>
              <pre
                data-prefix=">"
                class="text-warning"
              ><code>installing...</code></pre>
              <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">2007</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">iPhone</div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">2015</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Apple Watch</div>
        </li>
      </ul>
    </div>

    <div
      class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
        >
          <div class="max-w-xl lg:max-w-lg">
            <h2
              class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Subscribe to our newsletter.
            </h2>
            <p class="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div class="mt-6 flex max-w-md gap-x-4">
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </div>
              <dt class="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd class="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                  />
                </svg>
              </div>
              <dt class="mt-4 font-semibold text-white">No spam</dt>
              <dd class="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
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
          class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
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
        ></div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    > div {
      margin: 1rem;
    }
  }
}
</style>

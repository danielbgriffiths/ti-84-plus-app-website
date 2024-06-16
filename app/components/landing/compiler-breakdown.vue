<script lang="ts" setup></script>

<template>
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
</template>

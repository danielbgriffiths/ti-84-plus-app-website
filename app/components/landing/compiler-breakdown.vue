<script lang="ts" setup>
import CircleCheck from "~/components/icons/circle-check.vue";
</script>

<template>
  <div class="bg-neutral-100 py-24">
    <div class="mx-auto max-w-7xl pb-16 px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h1
          class="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl cursor-default no-select"
        >
          {{ $t("compiler.title") }}
        </h1>
        <p
          class="mt-6 text-lg leading-8 text-neutral-600 cursor-default no-select"
        >
          {{ $t("compiler.caption") }}
        </p>
      </div>
    </div>
    <ul class="timeline timeline-vertical">
      <!--
       Click Download Section
       -->
      <li>
        <div class="timeline-start">Click Download</div>
        <div class="timeline-middle">
          <CircleCheck />
        </div>
        <div class="timeline-end">
          <div class="mockup-browser border bg-base-300">
            <div class="mockup-browser-toolbar">
              <div class="input">https://tipython.com</div>
            </div>
            <div class="flex justify-center px-4 py-16 bg-base-200">
              <button class="btn btn-primary">Download</button>
            </div>
          </div>
        </div>
        <hr />
      </li>

      <!--
       Launch Rust Process
       -->
      <li>
        <hr />
        <div class="timeline-start">
          <div class="mockup-code">
            <code>
              <pre data-prefix="1">const executableProcess = path.resolve(</pre>
              <pre data-prefix="1">  __dirname,</pre>
              <pre data-prefix="2">
  process.env.COMPILER_EXECUTABLE_PATH!,</pre
              >
              <pre data-prefix="3">);</pre>
              <pre data-prefix="4"></pre>
              <pre data-prefix="5">const env = { ...process.env };</pre>
              <pre data-prefix="6"></pre>
              <pre data-prefix="7">
const executedProcess = new Promise((resolve, reject) => {</pre
              >
              <pre data-prefix="8">  execFile(</pre>
              <pre data-prefix="9">    executableProcess,</pre>
              <pre data-prefix="10">
    [body.groupName, body.scriptNames],</pre
              >
              <pre data-prefix="11">    { env },</pre>
              <pre data-prefix="12">
    (error: any, stdout: string, stderr: string): void => {</pre
              >
              <pre data-prefix="13">      ...</pre>
              <pre data-prefix="14">      ...</pre>
              <pre data-prefix="15"></pre>
              <pre data-prefix="16">      resolve({</pre>
              <pre data-prefix="17">        zipContent: stdout.trim(),</pre>
              <pre data-prefix="18">      });</pre>
              <pre data-prefix="19">    },</pre>
              <pre data-prefix="20">  );</pre>
              <pre data-prefix="21">});</pre>
            </code>
          </div>
        </div>
        <div class="timeline-middle">
          <CircleCheck />
        </div>
        <div class="timeline-end">Launch Rust Compiler Process</div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start">
          HTTP Request [application].download.py Blob
        </div>
        <div class="timeline-middle">
          <CircleCheck />
        </div>
        <div class="timeline-end">
          <div class="mockup-code">
            <pre
              data-prefix="$"
            ><code>curl https://https://raw.git...in/[group]/[application]/download.py</code></pre>
            <pre
              data-prefix=">"
              class="text-info"
            ><code>Fetching Download Blob...</code></pre>
            <pre data-prefix=">" class="text-success"><code>200!</code></pre>
          </div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start">
          <div class="mockup-code">
            <code>
              <pre data-prefix=">" class="text-success">
def get_float_input(prompt):</pre
              >
              <pre data-prefix=">" class="text-success">  while True:</pre>
              <pre data-prefix=">" class="text-success">    try:</pre>
              <pre data-prefix=">" class="text-success">
      return float(input(prompt))</pre
              >
              <pre data-prefix=">" class="text-success">
    except ValueError:</pre
              >
              <pre data-prefix=">" class="text-success">
      print("Invalid input. Please enter a number.")</pre
              >
              <pre></pre>
              <pre data-prefix="1" class="text-warning">
from common.helpers import get_float_input</pre
              >
              <pre data-prefix="2"></pre>
              <pre></pre>
              <pre data-prefix=">" class="text-success">
NO_REAL_SOLUTIONS = "No real solutions"</pre
              >
              <pre></pre>
              <pre data-prefix=">" class="text-warning">
from common.helpers import NO_REAL_SOLUTIONS, sqrt</pre
              >
              <pre data-prefix=">" class="text-success"></pre>
              <pre data-prefix=">" class="text-success">
def quadratic_equation(a, b, c):</pre
              >
              <pre data-prefix=">" class="text-success">
  discriminant = b ** 2 - 4 * a * c</pre
              >
              <pre data-prefix=">" class="text-success"></pre>
              <pre data-prefix=">" class="text-success">
  if discriminant > 0:</pre
              >
              <pre data-prefix=">" class="text-success">
    root1 = (-b + sqrt(discriminant)) / (2 * a)</pre
              >
              <pre data-prefix=">" class="text-success">
    root2 = (-b - sqrt(discriminant)) / (2 * a)</pre
              >
              <pre data-prefix=">" class="text-success">
    return root1, root2</pre
              >
              <pre data-prefix=">" class="text-success">
  elif discriminant == 0:</pre
              >
              <pre data-prefix=">" class="text-success">
    root = -b / (2 * a)</pre
              >
              <pre data-prefix=">" class="text-success">    return root</pre>
              <pre data-prefix=">" class="text-success">  else:</pre>
              <pre data-prefix=">" class="text-success">
    return NO_REAL_SOLUTIONS</pre
              >
              <pre></pre>
              <pre data-prefix="3" class="text-warning">
from pre_calculus.quadratic_equation.script import quadratic_equation</pre
              >
              <pre data-prefix="4"></pre>
              <pre data-prefix="5">print(</pre>
              <pre data-prefix="6">  quadratic_equation(</pre>
              <pre data-prefix="7">
    get_float_input("Enter coefficient a: "),</pre
              >
              <pre data-prefix="8">
    get_float_input("Enter coefficient b: "),</pre
              >
              <pre data-prefix="9">
    get_float_input("Enter coefficient c: ")</pre
              >
              <pre data-prefix="10">  )</pre>
              <pre data-prefix="11">)</pre>
            </code>
          </div>
        </div>
        <div class="timeline-middle">
          <CircleCheck />
        </div>
        <div class="timeline-end">Create Application Bundle</div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start">Return Compiled File</div>
        <div class="timeline-middle">
          <CircleCheck />
        </div>
        <div class="timeline-end">
          <div class="mockup-code">
            <code>
              <pre data-prefix="1">def get_float_input(prompt):</pre>
              <pre data-prefix="2">  while True:</pre>
              <pre data-prefix="3">    try:</pre>
              <pre data-prefix="4">      return float(input(prompt))</pre>
              <pre data-prefix="5">    except ValueError:</pre>
              <pre data-prefix="6">
      print("Invalid input. Please enter a number.")</pre
              >
              <pre data-prefix="7"></pre>
              <pre data-prefix="8">NO_REAL_SOLUTIONS = "No real solutions"</pre>
              <pre data-prefix="9"></pre>
              <pre data-prefix="10">def quadratic_equation(a, b, c):</pre>
              <pre data-prefix="11">  discriminant = b ** 2 - 4 * a * c</pre>
              <pre data-prefix="12">  if discriminant > 0:</pre>
              <pre data-prefix="13">
    root1 = (-b + sqrt(discriminant)) / (2 * a)</pre
              >
              <pre data-prefix="14">
    root2 = (-b - sqrt(discriminant)) / (2 * a)</pre
              >
              <pre data-prefix="15">    return root1, root2</pre>
              <pre data-prefix="16">  elif discriminant == 0:</pre>
              <pre data-prefix="17">    root = -b / (2 * a)</pre>
              <pre data-prefix="18">    return root</pre>
              <pre data-prefix="19">  else:</pre>
              <pre data-prefix="20">    return NO_REAL_SOLUTIONS</pre>
              <pre data-prefix="21"></pre>
              <pre data-prefix="22">print(</pre>
              <pre data-prefix="23">  quadratic_equation(</pre>
              <pre data-prefix="24">
    get_float_input("Enter coefficient a: "),</pre
              >
              <pre data-prefix="25">
    get_float_input("Enter coefficient b: "),</pre
              >
              <pre data-prefix="26">
    get_float_input("Enter coefficient c: ")</pre
              >
              <pre data-prefix="27">  )</pre>
              <pre data-prefix="28">)</pre>
            </code>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<template>
  <div class="mockup-code w-[600px]">
    <code>
      <pre></pre>
      <pre></pre>
      <pre data-prefix=">">[common]/helpers.py</pre>
      <pre data-prefix=">" class="text-success">
def get_float_input(prompt):</pre
      >
      <pre data-prefix=">" class="text-success">  while True:</pre>
      <pre data-prefix=">" class="text-success">    try:</pre>
      <pre data-prefix=">" class="text-success">
      return float(input(prompt))</pre
      >
      <pre data-prefix=">" class="text-success">    except ValueError:</pre>
      <pre data-prefix=">" class="text-success">
      print("Invalid input. Please enter a number.")</pre
      >
      <pre></pre>
      <pre data-prefix="1" class="text-warning">
from common.helpers import get_float_input</pre
      >
      <pre data-prefix="2"></pre>
      <pre></pre>
      <pre></pre>
      <pre data-prefix=">">import [common]/helpers.py</pre>
      <pre data-prefix=">" class="text-success">
NO_REAL_SOLUTIONS = "No real solutions"</pre
      >
      <pre data-prefix=">" class="text-success"></pre>
      <pre data-prefix=">" class="text-success"># Babylonian Method</pre>
      <pre data-prefix=">" class="text-success">
def sqrt(n, tolerance=1e-10):</pre
      >
      <pre data-prefix=">" class="text-success">  if n < 0:</pre>
      <pre data-prefix=">" class="text-success">
    raise ValueError("Cannot compute the square root of a negative number")</pre
      >
      <pre data-prefix=">" class="text-success">  if n == 0:</pre>
      <pre data-prefix=">" class="text-success">    return 0</pre>
      <pre data-prefix=">" class="text-success"></pre>
      <pre data-prefix=">" class="text-success">  x = n / 2</pre>
      <pre data-prefix=">" class="text-success">  while True:</pre>
      <pre data-prefix=">" class="text-success">
    next_x = 0.5 * (x + n / x)</pre
      >
      <pre data-prefix=">" class="text-success">
    if abs(x - next_x) < tolerance:</pre
      >
      <pre data-prefix=">" class="text-success">      return next_x</pre>
      <pre data-prefix=">" class="text-success">    x = next_x</pre>
      <pre></pre>
      <pre></pre>
      <pre data-prefix=">">[group]/[name]/script.py</pre>
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
      <pre data-prefix=">" class="text-success">  if discriminant > 0:</pre>
      <pre data-prefix=">" class="text-success">
    root1 = (-b + sqrt(discriminant)) / (2 * a)</pre
      >
      <pre data-prefix=">" class="text-success">
    root2 = (-b - sqrt(discriminant)) / (2 * a)</pre
      >
      <pre data-prefix=">" class="text-success">    return root1, root2</pre>
      <pre data-prefix=">" class="text-success">  elif discriminant == 0:</pre>
      <pre data-prefix=">" class="text-success">    root = -b / (2 * a)</pre>
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
      <pre data-prefix="7">    get_float_input("Enter coefficient a: "),</pre>
      <pre data-prefix="8">    get_float_input("Enter coefficient b: "),</pre>
      <pre data-prefix="9">    get_float_input("Enter coefficient c: ")</pre>
      <pre data-prefix="10">  )</pre>
      <pre data-prefix="11">)</pre>
    </code>
  </div>
</template>
<script setup lang="ts"></script>

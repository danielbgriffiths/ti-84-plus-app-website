<template>
  <div class="mockup-code w-[600px]">
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
      <pre data-prefix="10"># Babylonian Method</pre>
      <pre data-prefix="11">def sqrt(n, tolerance=1e-10):</pre>
      <pre data-prefix="12">  if n < 0:</pre>
      <pre data-prefix="13">
    raise ValueError("Cannot compute the square root of a negative number")</pre
      >
      <pre data-prefix="14">  if n == 0:</pre>
      <pre data-prefix="15">    return 0</pre>
      <pre data-prefix="16"></pre>
      <pre data-prefix="17">  x = n / 2</pre>
      <pre data-prefix="18">  while True:</pre>
      <pre data-prefix="19">    next_x = 0.5 * (x + n / x)</pre>
      <pre data-prefix="20">    if abs(x - next_x) < tolerance:</pre>
      <pre data-prefix="21">      return next_x</pre>
      <pre data-prefix="22">    x = next_x</pre>
      <pre data-prefix="23"></pre>
      <pre data-prefix="24">def quadratic_equation(a, b, c):</pre>
      <pre data-prefix="25">  discriminant = b ** 2 - 4 * a * c</pre>
      <pre data-prefix="26">  if discriminant > 0:</pre>
      <pre data-prefix="27">
    root1 = (-b + sqrt(discriminant)) / (2 * a)</pre
      >
      <pre data-prefix="28">
    root2 = (-b - sqrt(discriminant)) / (2 * a)</pre
      >
      <pre data-prefix="29">    return root1, root2</pre>
      <pre data-prefix="30">  elif discriminant == 0:</pre>
      <pre data-prefix="31">    root = -b / (2 * a)</pre>
      <pre data-prefix="32">    return root</pre>
      <pre data-prefix="33">  else:</pre>
      <pre data-prefix="34">    return NO_REAL_SOLUTIONS</pre>
      <pre data-prefix="35"></pre>
      <pre data-prefix="36">print(</pre>
      <pre data-prefix="37">  quadratic_equation(</pre>
      <pre data-prefix="38">    get_float_input("Enter coefficient a: "),</pre>
      <pre data-prefix="39">    get_float_input("Enter coefficient b: "),</pre>
      <pre data-prefix="40">    get_float_input("Enter coefficient c: ")</pre>
      <pre data-prefix="41">  )</pre>
      <pre data-prefix="42">)</pre>
    </code>
  </div>
</template>

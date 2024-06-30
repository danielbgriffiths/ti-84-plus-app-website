<template>
  <div class="mockup-code w-[600px]">
    <code>
      <pre data-prefix="1">const executableProcess = path.resolve(</pre>
      <pre data-prefix="1">  __dirname,</pre>
      <pre data-prefix="2">  process.env.COMPILER_EXECUTABLE_PATH!,</pre>
      <pre data-prefix="3">);</pre>
      <pre data-prefix="4"></pre>
      <pre data-prefix="5">const env = { ...process.env };</pre>
      <pre data-prefix="6"></pre>
      <pre data-prefix="7">
const executedProcess = new Promise((resolve, reject) => {</pre
      >
      <pre data-prefix="8">  execFile(</pre>
      <pre data-prefix="9">    executableProcess,</pre>
      <pre data-prefix="10">    [body.groupName, body.scriptNames],</pre>
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
</template>

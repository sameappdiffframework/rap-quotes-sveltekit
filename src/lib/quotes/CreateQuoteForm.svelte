<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();
</script>

<h1>Add a quote</h1>
<hr />
<form on:reset|preventDefault="{() => dispatcher('cancel')}"
      on:submit|preventDefault="{() => dispatcher('submit', {foo: 1})}">
  <input name="artist" type="text" />
  <input name="source" type="text" />
  <textarea name="quote"></textarea>

  <button type="submit">Submit</button>
  <button type="reset">Cancel</button>
</form>

<style>
    input.error,
    textarea.error {
        border: 1px solid indianred;
    }
</style>

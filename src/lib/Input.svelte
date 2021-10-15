<script lang="ts">
  import { ErrorMessage } from "sveltik";

  export let field;
  export let meta;
  export let form;
  export let props;
  let label = props.label || `${field.name.charAt(0).toUpperCase()}${field.name.substring(1)}`;
</script>

<div>
  <label for={field.name}>{label}</label>
  {#if props.inputType === 'textarea'}
  <textarea id={field.name}
            {...field}
            {...props}
            on:input={field.handleInput}
            on:blur={field.handleBlur}
            class:error={meta.touched && meta.error}
  ></textarea>
  {:else}
    <input id={field.name}
           type={props.inputType || 'text'}
           {...field}
           {...props}
           on:input={field.handleInput}
           on:blur={field.handleBlur}
           class:error={meta.touched && meta.error} />
  {/if}
  <ErrorMessage name={field.name} as="small" />
</div>

<style>
    input.error,
    textarea.error {
        border: 1px solid indianred;
    }
</style>

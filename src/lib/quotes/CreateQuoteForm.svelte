<script lang="ts">
  import Input from "$lib/Input.svelte";
  import { validate } from "$lib/quotes/quote-form.utils";
  import { createEventDispatcher } from "svelte";
  import { Field, Form, Sveltik } from "sveltik";

  const initialValues = { quote: "", artist: "", source: "" };
  const initialErrors = validate(initialValues);

  const dispatcher = createEventDispatcher();
  const onSubmit = dispatcher.bind(dispatcher, "submit");
  const onReset = dispatcher.bind(dispatcher, "cancel");
</script>

<h1>Add a quote</h1>
<hr />
<Sveltik {initialValues} {initialErrors}
         {onSubmit} {onReset}
         {validate} let:isValid>
  <Form>
    <Field name="artist" as="{Input}" />
    <Field name="source" as="{Input}" />
    <Field name="quote" inputType="textarea" as="{Input}" />
    <button type="submit" disabled={!isValid}>Submit</button>
    <button type="reset">Cancel</button>
  </Form>
</Sveltik>

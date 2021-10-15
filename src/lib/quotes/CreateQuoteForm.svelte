<script lang="ts">
  import Input from "$lib/Input.svelte";
  import { createEventDispatcher } from "svelte";
  import { Field, Form, Sveltik } from "sveltik";
  import * as Yup from "yup";
  import type { ValidationError } from "yup";

  const schema = Yup.object({
    quote: Yup.string()
      .trim()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    artist: Yup.string()
      .trim()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
    source: Yup.string()
      .trim()
      .max(25, "Must be 25 characters or less")
      .required("Required")
  });

  /**
   * convert a yup validation error into a sveltik validation error
   */
  function convertError(error: ValidationError) {
    if (error.inner.length === 0) {
      return { [error.path]: error.errors.join(", ") };
    } else {
      return error.inner.reduce((errors, err) => {
        return { ...errors, ...convertError(err) };
      }, {});
    }
  }

  function validate(values) {
    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (e) {
      return convertError(e);
    }
  }

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

import * as Yup from "yup";
import type { ValidationError } from "yup";

export interface QuoteFormInput {
  quote: string;
  artist: string;
  source: string;
}

const QUOTE_FORM_SCHEMA = Yup.object({
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

export function validate(input: QuoteFormInput) {
  try {
    QUOTE_FORM_SCHEMA.validateSync(input, { abortEarly: false });
    return {};
  } catch (e) {
    return convertError(e);
  }
}

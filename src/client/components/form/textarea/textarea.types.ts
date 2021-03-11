import { InputHTMLAttributes } from "react";

// Interfaces

export interface ITextarea {
  /** The error message to show underneath the form field */
  error?: string;
  /** The form element passed down by final-form */
  input: InputHTMLAttributes<HTMLTextAreaElement>;
  /** The maximum number of characters permitted */
  maxlength?: number;
  /** The placeholder text to show when the field has no value */
  placeholder: string;
  /** Whether the field is a mandatory requirement for the form submission or not */
  required?: boolean;
  /** Whether the field has been interacted with yet */
  touched: undefined | boolean;
}

export interface ITextareaAttributes {
  /** The additional attributes which may need to be dynamically set */
  [key: string]: any;
}

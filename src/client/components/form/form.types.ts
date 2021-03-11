// Interfaces

export interface IFormErrors {
  /** A collection of form errors */
  [key: string]: string;
}

interface IFormSubmitValues {
  /** A collection of form values upon submission */
  [key: string]: any;
}

// Types

export type TOnSubmit = (values: IFormSubmitValues) => void;

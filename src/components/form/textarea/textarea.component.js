import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

// Styles
import "../form.scss";
import styles from "./textarea.module.scss";

export default function Textarea({
  error,
  input: { name, onChange, value },
  maxlength,
  placeholder,
  required = false,
  touched = false
}) {
  // References
  const autoResizeRef = useRef(null);

  useEffect(() => {
    // This is to ensure that when the pre-population occurs from the parent page, it is reflected within the auto-resize element
    // @ts-ignore
    autoResizeRef.current.textContent = value;
  }, [value]);

  // Custom data attributes to flag multiple states of the form element
  const formItemDataAttributes = {
    "data-selector": "textarea",
    "data-form-item": true,
    "data-form-item-error": touched && error,
    "data-form-item-required": required
  };

  // Are there any potential custom attributes to add?
  const textareaAttributes = {};

  // Should the textarea have a maxlength?
  if (maxlength) {
    textareaAttributes.maxLength = maxlength;
  }

  return (
    <>
      <div {...formItemDataAttributes}>
        <textarea
          className={styles.textarea}
          name={name}
          onChange={onChange}
          placeholder={`${placeholder}${required ? " *" : ""}`}
          value={value}
          {...textareaAttributes}
        />
        <div
          className={styles["auto-resize"]}
          contentEditable={true}
          placeholder={`${placeholder}${required ? " *" : ""}`}
          ref={autoResizeRef}
        />
      </div>
      {touched && error && <div data-form-error-message>{error}</div>}
    </>
  );
};

Textarea.propTypes = {
  /** The error message to show underneath the form field */
  error: PropTypes.string,
  /** The form element passed down by final-form */
  input: PropTypes.element.isRequired,
  /** The maximum number of characters permitted */
  maxlength: PropTypes.number,
  /** The placeholder text to show when the field has no value */
  placeholder: PropTypes.string.isRequired,
  /** Whether the field is a mandatory requirement for the form submission or not */
  required: PropTypes.string,
  /** Whether the field has been interacted with yet */
  touched: PropTypes.boolean
};

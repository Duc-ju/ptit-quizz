import React from "react";
import classes from "./customInput.module.css";
import { useField } from "formik";
// @ts-ignore
import mergeClassNames from "merge-class-names";

export interface CustomInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  fieldLabel: string;
  fieldName: string;
  containerClassName?: string;
}

const CustomInput = ({
  fieldLabel,
  fieldName,
  containerClassName,
  ...props
}: CustomInputProps) => {
  const [field, meta] = useField(fieldName);
  const rootClasses = mergeClassNames(classes.root, containerClassName);
  return (
    <div className={rootClasses}>
      <h5 className={classes.fieldLabel}>{fieldLabel}</h5>
      <input
        className={classes.textInput}
        onChange={field.onChange(fieldName)}
        onBlur={field.onBlur(fieldName)}
        value={field.value}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className={classes.errorMessage}>{meta.error}</p>
      ) : null}
    </div>
  );
};

export default CustomInput;

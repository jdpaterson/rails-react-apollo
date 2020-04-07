import * as React from "react";

interface IFormInputProps {
  input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
}
export const InputText: React.FunctionComponent<IFormInputProps> = ({
  input,
  label
}): JSX.Element => (
  <label {...label}>
    {label.title}
    <input {...input} className={"form__body " + input.className}></input>
  </label>
);

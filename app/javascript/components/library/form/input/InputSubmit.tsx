import * as React from "react";

interface IInputSubmitProps {
  input?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
}
export const InputSubmit: React.FunctionComponent<IInputSubmitProps> = ({
  input
}): JSX.Element => (
  <input
    {...input}
    type="submit"
    className={"form__input-submit"}
    value={"Submit"}
  />
);

import * as React from "react";

interface IFormIndexProps {
  form: React.FormHTMLAttributes<HTMLFormElement>;
}

export const FormIndex: React.FunctionComponent<IFormIndexProps> = ({
  children,
  form
}) => <form className={"form-index"} {...form}>{children}</form>;

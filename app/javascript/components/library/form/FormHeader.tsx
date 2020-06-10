import * as React from "react";

interface IFormHeaderProps {}
export const FormHeader: React.FunctionComponent<IFormHeaderProps> = ({
  children
}) => <div className={"form-header"}>{children}</div>;

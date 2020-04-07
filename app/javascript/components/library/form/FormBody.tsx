import * as React from "react";

interface IFormBodyProps {}
export const FormBody: React.FunctionComponent<IFormBodyProps> = ({
  children
}) => <div className={"form-body"}>{children}</div>;

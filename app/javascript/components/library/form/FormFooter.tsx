import * as React from "react";

interface IFormFooterProps {}
export const FormFooter: React.FunctionComponent<IFormFooterProps> = ({
  children
}) => <div className={"form-footer"}>{children}</div>;

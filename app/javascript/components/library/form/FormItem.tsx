import * as React from "react";

interface IFormItemProps {}
export const FormItem: React.FunctionComponent<IFormItemProps> = ({
  children
}) => <div className={"form-item"}>{children}</div>;

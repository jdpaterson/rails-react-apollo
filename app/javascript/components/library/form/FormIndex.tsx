import * as React from "react";

interface IFormIndexProps {}

export const FormIndex: React.FunctionComponent<IFormIndexProps> = ({
  children
}) => <form>{children}</form>;

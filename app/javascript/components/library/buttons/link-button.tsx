import * as React from "react";

export interface LinkButtonProps {
  aProps: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  buttonProps?: React.HTMLAttributes<HTMLElement>;
}
export const LinkButton = ({aProps, buttonProps}:LinkButtonProps):JSX.Element => (
  <a {...aProps} className={"link-button__a"}>
    <button {...buttonProps} className={"link-button__button"}>{buttonProps.title}</button>
  </a>
)
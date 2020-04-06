import * as React from "react";

export interface INavbarItemProps {
  aProps: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  liProps?: React.HTMLAttributes<HTMLElement>;
}
export const NavbarItem: React.FunctionComponent<INavbarItemProps> = ({
  aProps,
  liProps
}) => (
  <li {...liProps}>
    <a {...aProps}>{aProps.title}</a>
  </li>
);

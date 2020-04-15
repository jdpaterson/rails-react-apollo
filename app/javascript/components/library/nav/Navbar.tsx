import * as React from "react";
import { INavbarItemProps, NavbarItem } from "./NavbarItem";

export interface INavbarProps {
  navProps?: React.HTMLAttributes<HTMLElement>;
  navbarItems: Array<INavbarItemProps>;
  ulProps?: React.HTMLAttributes<HTMLElement>;
}
export const Navbar: React.FunctionComponent<INavbarProps> = ({
  navProps,
  navbarItems,
  ulProps
}) => (
  <nav {...navProps} className="navbar__nav">
    <ul {...ulProps} className="navbar__ul">
      {navbarItems.map((item, index) => (
        <NavbarItem key={index} {...item} />
      ))}
    </ul>
  </nav>
);

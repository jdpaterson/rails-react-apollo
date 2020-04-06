import * as React from "react";
import { INavbarItemProps, NavbarItem } from "./NavbarItem";

export interface INavbarProps {
  headerProps?: React.HTMLAttributes<HTMLElement>;
  navProps?: React.HTMLAttributes<HTMLElement>;
  navbarItems: Array<INavbarItemProps>;
  ulProps?: React.HTMLAttributes<HTMLElement>;
}
export const Navbar: React.FunctionComponent<INavbarProps> = ({
  headerProps,
  navProps,
  navbarItems,
  ulProps
}) => (
  <header {...headerProps}>
    <nav {...navProps}>
      <ul {...ulProps}>
        {navbarItems.map((item, index) => (
          <NavbarItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  </header>
);

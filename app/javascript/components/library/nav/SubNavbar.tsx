import * as React from "react";
import { Navbar, INavbarProps } from "./Navbar";

interface ISubNavbarProps extends INavbarProps {}
export const SubNavbar = (props: ISubNavbarProps): JSX.Element => (
  <Navbar {...props} />
);

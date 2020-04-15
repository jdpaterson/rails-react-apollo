import * as React from "react";
import { Navbar } from "../../library/nav/Navbar";

interface IRootNavProps {}
export const RootNav: React.FunctionComponent<IRootNavProps> = (): JSX.Element => {
  const rootNavLinks = [{ aProps: { href: "/posts", title: "Posts" } }];
  return <Navbar navbarItems={rootNavLinks} />;
};

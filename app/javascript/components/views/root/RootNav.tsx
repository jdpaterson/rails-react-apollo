import * as React from "react";
import { Nav, NavLI, NavA, NavUL } from "~/library";

interface IRootNavProps { }
export const RootNav: React.FunctionComponent<IRootNavProps> = (): JSX.Element => (
  <Nav>
    <NavUL>
      <NavLI>
        <NavA href={"/posts"}>
          {"Posts"}
        </NavA>
      </NavLI>
    </NavUL>
  </Nav>
)

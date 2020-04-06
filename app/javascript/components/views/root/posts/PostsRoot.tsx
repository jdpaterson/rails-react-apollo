import * as React from "react";
import Root from "../Root";
import { SubNavbar } from "../../../library/nav";
import { PostsAll } from "./PostsAll";

const PostsRoot = (): JSX.Element => (
  <Root>
    <SubNavbar
      navbarItems={[
        { aProps: { href: "/posts/new", title: "New" } },
        { aProps: { href: "/posts/edit", title: "Edit" } },
        { aProps: { href: "/posts/", title: "All" } }
      ]}
    />
    <PostsAll />
  </Root>
);

export default PostsRoot;

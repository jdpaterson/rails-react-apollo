import * as React from "react";
import PostsRoot from "../PostsRoot";
import { PostsIndexQuery } from "./PostsIndexQuery";
import { LinkButton } from "../../../../library";

const PostsIndex = (): JSX.Element => {
  return (
    <PostsRoot>
      <PostsIndexQuery />
      <LinkButton
        aProps={{ href: "/posts/new" }}
        buttonProps={{ title: "New Post" }}
      />
    </PostsRoot>
  );
};

export default PostsIndex;

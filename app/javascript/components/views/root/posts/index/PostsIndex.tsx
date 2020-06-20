import * as React from "react";
import PostsRoot from "../PostsRoot";
import { PostsIndexQuery } from "./PostsIndexQuery";
import { LinkA, LinkButton } from "../../../../library";

const PostsIndex = (): JSX.Element => {
  return (
    <PostsRoot>
      <PostsIndexQuery />
      <LinkA href={`/posts/new`} >
        <LinkButton value="Edit">{"New Post"}</LinkButton>
      </LinkA>
    </PostsRoot>
  );
};

export default PostsIndex;

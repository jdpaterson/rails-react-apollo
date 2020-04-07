import * as React from "react";
import PostsRoot from "../PostsRoot";
import { FormIndex } from "../../../../library";
import { PostsNewMain } from "./";

const PostsNew = (): JSX.Element => {
  return (
    <PostsRoot>
      <PostsNewMain />
    </PostsRoot>
  );
};

export default PostsNew;

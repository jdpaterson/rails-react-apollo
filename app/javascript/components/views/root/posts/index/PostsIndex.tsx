import * as React from "react";
import PostsRoot from "../PostsRoot";
import { PostsIndexQuery } from "./PostsIndexQuery";

const PostsIndex = (): JSX.Element => {
  return (
    <PostsRoot>
      <PostsIndexQuery />
    </PostsRoot>
  );
};

export default PostsIndex;

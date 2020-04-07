import * as React from "react";
import PostsRoot from "../PostsRoot";
import { PostsShowQuery } from "./PostsShowQuery";

const PostsShow = (): JSX.Element => {
  return (
    <PostsRoot>
      <PostsShowQuery />
    </PostsRoot>
  );
};

export default PostsShow;

import * as React from "react";
import PostsRoot from "../PostsRoot";
import { PostsShowQuery } from "../show/PostsShowQuery";

interface IPostsShowProps {
  postId: string;
}
const PostsShow = ({ postId }: IPostsShowProps): JSX.Element => (
  <PostsRoot>
    <PostsShowQuery postId={postId} />
  </PostsRoot>
);

export default PostsShow;

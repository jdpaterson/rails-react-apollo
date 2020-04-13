import * as React from "react";
import PostsRoot from "../PostsRoot";
import { PostsEditQuery } from "./PostsEditQuery";

interface IPostsShowProps {
  postId: string;
}
const PostsShow = ({ postId }: IPostsShowProps): JSX.Element => (
  <PostsRoot>
    <PostsEditQuery postId={postId} />
  </PostsRoot>
);

export default PostsShow;

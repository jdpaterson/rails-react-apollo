import * as React from "react";
import { IPost } from "../PostsRoot";

interface IPostsShowMainProps {
  post: IPost;
}

export const PostsShowMain = ({ post }: IPostsShowMainProps): JSX.Element => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <a href={`/posts/${post.id}/edit`}>
      <button>Edit</button>
    </a>
  </>
);

import * as React from "react";
import { IPost } from "../PostsRoot";
import { LinkA, LinkButton } from "../../../../library";

interface IPostsShowMainProps {
  post: IPost;
}

export const PostsShowMain = ({ post }: IPostsShowMainProps): JSX.Element => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <div>
      <img src={post.photoUrl} alt={"post photo"} />
    </div>
    <LinkA href={`/posts/${post.id}/edit`} >
      <LinkButton value="Edit">Edit</LinkButton>
    </LinkA>
  </>
);

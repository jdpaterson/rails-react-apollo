import * as React from "react";
import Root from "../Root";

export interface IPost {
  body?: string;
  id?: string;
  photoUrl?: string;
  rating?: number;
  title?: string;
}

interface IPostsRootProps {}
const PostsRoot: React.FunctionComponent<IPostsRootProps> = ({
  children
}): JSX.Element => <Root>{children}</Root>;

export default PostsRoot;

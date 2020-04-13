import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { IPost } from "../PostsRoot";

interface IPostsShowVars {
  id: string;
}

interface IPostsShowData {
  post: IPost;
}

const POSTS_ALL_POSTS = gql`
  query postsShow($id: Int!) {
    post(id: $id) {
      id
      title
      body
      rating
    }
  }
`;

interface IPostsShowQueryProps {
  postId: string;
}

export const PostsShowQuery = ({
  postId
}: IPostsShowQueryProps): JSX.Element => {
  const { loading, error, data } = useQuery<IPostsShowData, IPostsShowVars>(
    POSTS_ALL_POSTS,
    {
      variables: {
        id: postId
      }
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error getting posts.</p>;
  }
  const { post } = data;
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

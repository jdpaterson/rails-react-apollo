import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { PostsEditMain } from "./PostsEditMain";
import { IPost } from "../PostsRoot";
import { gql } from "apollo-boost";
import { postFields } from "../posts.gql";

export interface IPostsEditVars {
  id: string;
}

export interface IPostsEditData {
  post: IPost;
  users: any;
}

interface IPostsEditQueryProps {
  postId: string;
}

const POSTS_EDIT = gql`
  query postsEdit($id: Int!) {
    post(id: $id) {
      ...postFields
    }
    users {
      id
    }
  }
  ${postFields}
`;

export const PostsEditQuery = ({
  postId
}: IPostsEditQueryProps): JSX.Element => {
  const { loading, error, data } = useQuery<IPostsEditData, IPostsEditVars>(
    POSTS_EDIT,
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
  return <PostsEditMain post={data.post} />;
};

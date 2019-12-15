import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface IPost {
  title: string;
  rating: number;
}

interface GetPostVars {
  id: number;
}

interface GetPostData {
  getPost: IPost;
}

const GET_POST = gql`
  query getPost($id: Int!) {
    getPost(id: $id) {
      title
      rating
    }
  }
`;

export const Post = (): JSX.Element => {
  const { loading, error, data } = useQuery<GetPostData, GetPostVars>(
    GET_POST,
    {
      variables: { id: 1 }
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const {
    getPost: { title, rating }
  } = data;

  return (
    <>
      <p>
        {title}: {rating}
      </p>
    </>
  );
};

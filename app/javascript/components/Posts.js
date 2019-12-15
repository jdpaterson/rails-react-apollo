import React from "react"
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const POSTS = gql`
  {
    posts{
        title  
        rating    
    }
  }
`;

export const Posts = () => {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.map(({ title, rating }, index) => (
    <div key={index}>
      <p>
        {title}: {rating}
      </p>
    </div>
  ));
}
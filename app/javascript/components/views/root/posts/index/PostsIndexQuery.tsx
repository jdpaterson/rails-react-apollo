import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { IPost } from "../PostsRoot";
import { postFields } from "../posts.gql";

interface IPostsAllPostsVars {}

interface IPostsAllPostsData {
  posts: Array<IPost>;
}

const POSTS_ALL_POSTS = gql`
  query postsAllPosts {
    posts {
      ...postFields
    }
  }
  ${postFields}
`;

export const PostsIndexQuery = () => {
  const { loading, error, data } = useQuery<
    IPostsAllPostsData,
    IPostsAllPostsVars
  >(POSTS_ALL_POSTS, {
    variables: {}
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error getting posts.</p>;
  const { posts } = data;
  return (
    <>
      <p>{posts.length} posts found.</p>
      <ul>
        {posts.map((post, index) => (
          <a key={index} href={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </a>
        ))}
      </ul>
    </>
  );
};

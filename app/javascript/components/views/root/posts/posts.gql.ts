import { gql } from "apollo-boost";

export const postFields = gql`
  fragment postFields on Post {
    id
    body
    title
    rating
  }
`;
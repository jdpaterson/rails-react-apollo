import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { IPost } from "../PostsRoot";
import {
  FormBody,
  FormHeader,
  FormIndex,
  FormItem,
  InputText
} from "../../../../library";

interface IPostsAllPostsVars {}

interface IPostsAllPostsData {
  posts: Array<IPost>;
}

const POSTS_ALL_POSTS = gql`
  query postsAllPosts {
    posts {
      title
      rating
    }
  }
`;

interface IPostsNewForm {
  title: string;
  body: string;
}

export const PostsNewMain = () => {
  const [postsNewForm, setPostsNewForm] = React.useState<IPostsNewForm>({
    title: "",
    body: ""
  });
  return (
    <FormIndex>
      <FormHeader></FormHeader>
      <FormBody>
        <FormItem>
          <InputText
            input={{
              onChange: ({ target: { value } }) =>
                setPostsNewForm({ ...postsNewForm, title: value }),
              value: postsNewForm.title
            }}
            label={{ title: "Post Title:" }}
          />
        </FormItem>
        <FormItem>
          <InputText
            input={{
              onChange: ({ target: { value } }) =>
                setPostsNewForm({ ...postsNewForm, body: value })
            }}
            label={{ title: "Post Body:" }}
          />
        </FormItem>
      </FormBody>
    </FormIndex>
  );
};

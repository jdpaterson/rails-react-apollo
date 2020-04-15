import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { IPost } from "../PostsRoot";
import {
  FormBody,
  FormFooter,
  FormHeader,
  FormIndex,
  FormItem,
  InputText,
  InputSubmit
} from "../../../../library";
import { toast } from "react-toastify";

interface IPostsCreatePostsVars {
  input: {
    post: IPost;
  };
}
// interface IPostsCreatePostsVars {
//   post: IPost;
// }

interface IPostsCreatePostsData {
  post: IPost;
}

const POSTS_CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        title
        body
        rating
      }
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
  const [createPost, { data }] = useMutation<
    IPostsCreatePostsData,
    IPostsCreatePostsVars
  >(POSTS_CREATE_POST, {
    onCompleted: (data) => {
      toast("Toast Completed Successfully");
    }
  });
  return (
    <FormIndex
      form={{
        onSubmit: e => {
          e.preventDefault();
          createPost({
            variables: {
              input: {
                post: { ...postsNewForm }
              }
            }
          });
        }
      }}
    >
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
                setPostsNewForm({ ...postsNewForm, body: value }),
              value: postsNewForm.body
            }}
            label={{ title: "Post Body:" }}
          />
        </FormItem>
      </FormBody>
      <FormFooter>
        <FormItem>
          <InputSubmit />
        </FormItem>
      </FormFooter>
    </FormIndex>
  );
};

// {"operationName"=>"createPost", "variables"=>{"input"=>{"post"=>{"title"=>"123", "body"=>"321"}}}
//                                 "variables"=>{"input"=>{"post"=>{"title"=>"123", "body"=>"321"}}}

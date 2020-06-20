import * as React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { IPost } from "../PostsRoot";
import {
  FormBody,
  FormFooter,
  Form,
  FormItem,
  FormInputLabel,
  FormInputText,
  FormInputSubmit
} from "~/library";
import { toast } from "react-toastify";
import { postFields } from "../posts.gql";

interface IPostsCreatePostsVars {
  input: {
    post: IPost;
  };
}

interface IPostsCreatePostsData {
  post: IPost;
}

const POSTS_CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        ...postFields
      }
    }
  }
  ${postFields}
`;

interface IPostsNewForm {
  body: string;
  photoUrl: string;
  title: string;
}

export const PostsNewMain = () => {
  const [postsNewForm, setPostsNewForm] = React.useState<IPostsNewForm>({
    body: "",
    photoUrl: "",
    title: ""
  });
  const [createPost, { data }] = useMutation<
    IPostsCreatePostsData,
    IPostsCreatePostsVars
  >(POSTS_CREATE_POST, {
    onCompleted: (data) => {
      toast("Toast Completed Successfully");
    },
    onError: (err) => {
      toast(String(err));
    }
  });
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        createPost({
          variables: {
            input: {
              post: { ...postsNewForm }
            }
          }
        });
      }
      }
    >
      <FormBody>
        <FormItem>
          <FormInputLabel>{"Post Title:"}
            <FormInputText
              onChange={({ target: { value } }) =>
                setPostsNewForm({ ...postsNewForm, title: value })}
              value={`${postsNewForm.title}`}
            />
          </FormInputLabel>
        </FormItem>
        <FormItem>
          <FormInputLabel>{"Post Body:"}
            <FormInputText
              onChange={({ target: { value } }) =>
                setPostsNewForm({ ...postsNewForm, body: value })}
              value={postsNewForm.body}
            />
          </FormInputLabel>
        </FormItem>
        <FormItem>
          <FormInputLabel>{"Post PhotoUrl:"}
            <FormInputText
              onChange={({ target: { value } }) =>
                setPostsNewForm({ ...postsNewForm, photoUrl: value })}
              value={`${postsNewForm.photoUrl}`}
            />
          </FormInputLabel>
        </FormItem>
      </FormBody>
      <FormFooter>
        <FormItem>
          <FormInputSubmit />
        </FormItem>
      </FormFooter>
    </Form>
  );
};

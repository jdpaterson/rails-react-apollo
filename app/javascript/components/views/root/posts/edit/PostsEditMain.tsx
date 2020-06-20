import * as React from "react";
import { IPost } from "../PostsRoot";
import {
  Form,
  FormHeader,
  FormBody,
  FormItem,
  FormInputLabel,
  FormInputText,
  FormFooter,
  FormInputSubmit
} from "~/library";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { postFields } from "../posts.gql";

interface IPostsUpdatePostVars {
  input: {
    post: IPost;
  };
}

interface IPostsUpdatePostData {
  post: IPost;
}

const POSTS_UPDATE_POST = gql`
  mutation updatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      post {
        ...postFields
      }
    }
  }
  ${postFields}
`;

interface IPostsEditMainProps {
  post: IPost;
}

export const PostsEditMain = ({ post }: IPostsEditMainProps): JSX.Element => {
  const [postsEditForm, setPostsEditForm] = React.useState<IPost>(post);
  const [updatePost, { data }] = useMutation<
    IPostsUpdatePostData,
    IPostsUpdatePostVars
  >(POSTS_UPDATE_POST, {
    onCompleted: (data) => {
      toast("Completed Successfully");
    },
    onError: (err) => {
      toast(String(err));
    }
  });
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        updatePost({
          variables: {
            input: {
              post: { ...postsEditForm }
            }
          }
        });
      }}
    >
      <FormHeader>Edit Post</FormHeader>
      <FormBody>
        <FormItem>
          <FormInputLabel>{"Post Title:"}
            <FormInputText
              onChange={({ target: { value } }) =>
                setPostsEditForm({ ...postsEditForm, title: value })}
              value={postsEditForm.title}
            />
          </FormInputLabel>
        </FormItem>
        <FormItem>
          <FormInputLabel>{"Post Body:"}
            <FormInputText
              onChange={({ target: { value } }) =>
                setPostsEditForm({ ...postsEditForm, body: value })}
              value={`${postsEditForm.body}`}
            />
          </FormInputLabel>
        </FormItem>
        <FormItem>
          <FormInputLabel>{"Post PhotoUrl:"}
            <FormInputText
              onChange={({ target: { value } }) =>
                setPostsEditForm({ ...postsEditForm, photoUrl: value })}
              value={`${postsEditForm.photoUrl}`}
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

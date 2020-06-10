import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { IPost } from "../PostsRoot";
import {
  FormBody,
  FormFooter,
  FormIndex,
  FormItem,
  InputText,
  InputSubmit
} from "../../../../library";
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
        <FormItem>
          <InputText
            input={{
              onChange: ({ target: { value } }) =>
                setPostsNewForm({ ...postsNewForm, photoUrl: value }),
              value: postsNewForm.photoUrl || ""
            }}
            label={{ title: "Post PhotoUrl:" }}
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

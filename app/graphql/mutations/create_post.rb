module Mutations
  class CreatePost < Mutations::BaseMutation

    argument :post, Types::PostAttributes, required: true

    field :post, Types::PostType, null: false

    def resolve(post:)
      post = Post.create(
        title: post[:username],
        body: post[:title]
      )
      {
        post: post
      }
    end
  end
end
module Mutations
  class CreatePost < BaseMutation
    argument :post, Types::PostAttributes, required: true

    field :post, Types::PostType, null: false

    def resolve(post:)
      post = Post.new(
        title: post[:title],
        body: post[:body]
      )
      post.save!
      {
        post: post
      }
    end
  end
end
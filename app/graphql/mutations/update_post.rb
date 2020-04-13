module Mutations
  class UpdatePost < BaseMutation
    argument :post, Types::PostAttributes, required: true

    field :post, Types::PostType, null: false

    def resolve(post:)
      # byebug
      post_record = Post.find(post[:id])
      post_record.update({
                          title: post[:title],
                          body: post[:body]
                        })
      {
        post: post_record
      }
    end
  end
end
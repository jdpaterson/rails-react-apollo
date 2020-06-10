module Mutations
  class UpdatePost < BaseMutation
    argument :post, Types::PostAttributes, required: true

    field :post, Types::PostType, null: false

    def resolve(post:)
      post_record = Post.find(post[:id])
      post_record.update({
                          title: post[:title],
                          body: post[:body],
                          photo_url: post[:photo_url]
                        })
      {
        post: post_record
      }
    end
  end
end
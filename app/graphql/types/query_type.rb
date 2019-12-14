module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :post, PostType, null: false
    def post
      Post.first
    end
    field :posts, [PostType], null: false
    def posts
      Post.all
    end
    
  end
end

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :get_post, PostType, null: false do
      argument :id, Integer, required: true 
    end
    def get_post(id:)
      Post.find(id)
    end
    field :posts, [PostType], null: false
    def posts
      Post.all
    end
    
  end
end

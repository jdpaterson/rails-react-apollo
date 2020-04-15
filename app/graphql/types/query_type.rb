module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :post, PostType, null: false do
      argument :id, Integer, required: true
    end
    def post(id:)
      Post.find(id)
    end
    field :posts, [PostType], null: false
    def posts
      Post.all
    end

    field :users, [UserType], null: true
    def users
      User.all
    end

  end
end

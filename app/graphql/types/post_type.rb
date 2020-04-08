module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :rating, Integer, null: true
    field :posted_by, UserType, null: true
  end
end

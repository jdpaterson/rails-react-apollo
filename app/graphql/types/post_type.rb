module Types
  class PostType < Types::BaseObject
    field :body, String, null: false
    field :id, ID, null: false
    field :photo_url, String, null: true
    field :posted_by, UserType, null: true
    field :rating, Integer, null: true
    field :title, String, null: false
  end
end

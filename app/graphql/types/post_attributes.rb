module Types
  class PostAttributes < GraphQL::Schema::InputObject
    description 'Attributes for creating or modifying a Post'

    argument :__typename, String, required: false
    argument :id, ID, required: false
    argument :title, String, required: false
    argument :body, String, required: false
    argument :rating, Integer, required: false
  end
end

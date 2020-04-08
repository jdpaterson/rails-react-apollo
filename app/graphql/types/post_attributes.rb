module Types
  class PostAttributes < GraphQL::Schema::InputObject
    description 'Attributes for creating or modifying a Post'

    argument :id, ID, required: false
    argument :title, String, required: false
    argument :body, String, required: false
  end
end

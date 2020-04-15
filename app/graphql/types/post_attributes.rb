module Types
  class PostAttributes < GraphQL::Schema::InputObject
    description 'Attributes for creating or modifying a Post'

    argument :__typename, String, required: false
    argument :id, ID, required: false
    argument :body, String, required: true
    argument :photo_url, String, required: true
    argument :title, String, required: true

  end
end

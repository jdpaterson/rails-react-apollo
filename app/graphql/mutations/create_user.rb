module Mutations
  class CreateUser < BaseMutation

    argument :username, String, required: true
    argument :credentials, Types::AuthProviderCredentialsAttributes, required: false

    type Types::UserType

    def resolve(username: nil, auth_provider: nil)
      User.create!(
        username: username,
        email: auth_provider&.[](:credentials)&.[](:email),
        password: auth_provider&.[](:credentials)&.[](:password)
      )
    end
  end
end
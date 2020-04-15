module Mutations
  class CreateUser < BaseMutation

    argument :username, String, required: true
    argument :credentials, Types::AuthProviderCredentialsAttributes, required: false

    type Types::UserType

    def resolve(username: nil, credentials: nil)
      User.create!(
        username: username,
        email: credentials[:email],
        password: credentials[:password]
      )
    end
  end
end
# Readme

A boilerplate setup including: Rails, React, Apollo(React), Ruby-GraphQL, Typescript, Styled-Components, ESLint + Prettier, Docker-Compose

## Getting Started

Run rails s
Run bin/webpack-dev-server in separate terminal
Navigate to localhost:3000

## Creating React Components

Create .jsx or .tsx files in the /app/javascript/components folder.
The Root.tsx file is the main component, the ApolloClient is defined in that file.
Nest your new component somewhere under the Root component, and it's all straight React from there.

## Helpful Links

(https://www.howtographql.com/graphql-ruby/4-authentication/)

# Run in Docker

In .env

```
DB_USER_PASSWORD=postgres
DB_HOST=db
```

Run the app:
`docker-compose up`

In a separate terminal, create the database:
`docker-compose run web rails db:create db:migrate`

Once webpacker has compiled (will notify you in docker-compose up terminal), open http://localhost:3000

To ensure webpacker is hot reloading edit files to /app/javascript/components/* and see your browser refresh

## Entering the web container

`docker-compose exec web bash`

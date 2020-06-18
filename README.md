# Readme

A boilerplate setup including: Rails, React, Apollo(React), Ruby-GraphQL, Typescript, ESLint + Prettier

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
Build the image: 
`docker-compose build`

Run the app:
`docker-compose up`

Create the database:
`docker-compose run web bash -c "rake db:create db:migrate"`

Now open http://localhost:3000 and look at your Javascript console to see messages

## Entering the web container

`docker-compose exec web bash`

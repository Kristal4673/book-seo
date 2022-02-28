const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    id: ID!
    author: String!
    description: String!
    bookId: String!
    link: String!
    title: String!
    image: String!
  }

  type Auth {
    token: ID
    user: User
  }

  input BookInput {
    bookAuthors: [String]!
    description: String!
    title: String!
    bookId: String!
    image: String!
    link: String!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
    getSingleUser(id: ID!): User!
    me: User!
  }

  # Mutations
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, input: BookInput): User!
    removeBook(userId: ID!, bookId: String): User!
  }
`;

module.exports = typeDefs;

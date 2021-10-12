// import the gql tagged template function
const { gql } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// create our typeDefs
const typeDefs = gql`

  type BookInput {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }
  
`;

// export the typeDefs
module.exports = typeDefs;
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password){
            token 
            user {
                _id
                username
                Book
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!) {
        addUser(username: $username, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`

export const SAVE_BOOK = gql`
mutation($userId: ID!, $input: BookInput) {
    saveBook(userId: $userId, input: $input) {
      id
      savedBooks {
        title
        description
      }
    }
  }
`
export const REMOVE_BOOK = gql`
mutation($bookId: String, $userId: ID!) {
    removeBook(bookId: $bookId, userId: $userId) {
      id
      savedBooks {
        title
        bookId
      }
    }
  }
  
`
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
        Book
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation ($userId: ID!, $input: BookInput) {
    saveBook(userId: $userId, input: $input) {
      id
      savedBooks {
        title
        description
      }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation ($bookId: String, $userId: ID!) {
    removeBook(bookId: $bookId, userId: $userId) {
      id
      savedBooks {
        title
        bookId
      }
    }
  }
`;







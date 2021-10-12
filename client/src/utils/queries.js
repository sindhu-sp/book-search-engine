import { gql } from '@apollo/client';

// Query a User 
export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    savedBooks {
        bookId
        author
        image
        title
        description
        link
    }
  }
}
`;
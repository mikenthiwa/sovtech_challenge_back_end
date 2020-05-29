import { gql } from "apollo-server-express";

export const categoryTypeDef = gql`
    type Query {
      categories: [String!]  
    }
`;
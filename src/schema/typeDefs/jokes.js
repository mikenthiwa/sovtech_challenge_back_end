import { gql } from "apollo-server-express";

export const jokesTypeDef = gql`
    extend type Query {
        joke(category: String!): Joke
    }
    
    type Joke {
        id: ID!
        icon_url: String!
        url: String
        value: String
        categories: [String!]
    }
`;
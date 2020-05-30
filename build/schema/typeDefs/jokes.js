"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jokesTypeDef = void 0;

var _apolloServerExpress = require("apollo-server-express");

const jokesTypeDef = (0, _apolloServerExpress.gql)`
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
exports.jokesTypeDef = jokesTypeDef;
//# sourceMappingURL=jokes.js.map
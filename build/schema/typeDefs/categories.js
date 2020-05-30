"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryTypeDef = void 0;

var _apolloServerExpress = require("apollo-server-express");

const categoryTypeDef = (0, _apolloServerExpress.gql)`
    type Query {
      categories: [String!]  
    }
`;
exports.categoryTypeDef = categoryTypeDef;
//# sourceMappingURL=categories.js.map
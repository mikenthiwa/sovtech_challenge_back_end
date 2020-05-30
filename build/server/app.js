"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _schema = _interopRequireDefault(require("../schema"));

var _apolloServerExpress = require("apollo-server-express");

var _resolvers = _interopRequireDefault(require("../resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const app = (0, _express.default)();
  app.use((0, _cors.default)());
  const server = new _apolloServerExpress.ApolloServer({
    typeDefs: _schema.default,
    resolvers: _resolvers.default
  });
  server.applyMiddleware({
    app
  });
  return app;
};

exports.default = _default;
//# sourceMappingURL=app.js.map
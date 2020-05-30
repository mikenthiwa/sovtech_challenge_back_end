"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jokeResolver = void 0;

var _modules = require("../modules");

const jokeResolver = {
  Query: {
    joke: (args, req) => {
      const {
        category
      } = req;
      return _modules.Jokes.joke(category);
    }
  }
};
exports.jokeResolver = jokeResolver;
//# sourceMappingURL=jokes.js.map
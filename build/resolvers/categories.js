"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryResolver = void 0;

var _modules = require("../modules");

const categoryResolver = {
  Query: {
    categories: () => _modules.Jokes.getCategories()
  }
};
exports.categoryResolver = categoryResolver;
//# sourceMappingURL=categories.js.map
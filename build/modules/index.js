"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jokes = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Jokes {
  static async getCategories() {
    const response = await _axios.default.get('https://api.chucknorris.io/jokes/categories');
    return response.data;
  }

  static async joke(category) {
    const response = await _axios.default.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    return response.data;
  }

}

exports.Jokes = Jokes;
//# sourceMappingURL=index.js.map
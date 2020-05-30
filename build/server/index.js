"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const port = process.env.PORT;
const app = (0, _app.default)();
app.listen(port, () => console.log(`listening in port ${port}`));
//# sourceMappingURL=index.js.map
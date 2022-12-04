"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
function getAllCharacters(req, res) {
    res.send(data_1.characters);
}
exports.default = getAllCharacters;
//# sourceMappingURL=getAllCharacters.js.map
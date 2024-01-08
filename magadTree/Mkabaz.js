"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MkabazModel = exports.generateRandomMkabazs = void 0;
var mongoose_1 = require("mongoose");
var mkabazSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true },
    magad: { type: String, required: true },
});
var generateRandomMkabazs = function (magadList) {
    var minMkabazs = 12;
    var maxMkabazs = Math.floor(Math.random() * (magadList.length * 3 - minMkabazs + 1)) + minMkabazs;
    var mkabazList = [];
    for (var i = 1; i <= maxMkabazs; i++) {
        var randomMagad = magadList[Math.floor(Math.random() * magadList.length)];
        var mkabazNumber = i;
        var mkabazId = "mkabaz-".concat(mkabazNumber);
        var mkabazName = "".concat(randomMagad.name, "-").concat(mkabazNumber);
        var mkabaz = {
            name: mkabazName,
            _id: mkabazId,
            magad: randomMagad._id
        };
        mkabazList.push(mkabaz);
    }
    return mkabazList;
};
exports.generateRandomMkabazs = generateRandomMkabazs;
exports.MkabazModel = (0, mongoose_1.model)('Mkabaz', mkabazSchema);

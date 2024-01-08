"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakatModel = exports.generateRandomMakats = void 0;
var mongoose_1 = require("mongoose");
var makatSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true },
    mkabaz: { type: String, required: true },
});
var generateRandomMakats = function (mkabazList) {
    var minMakats = 24;
    var maxMakats = Math.min(mkabazList.length * 3, mkabazList.length + minMakats);
    var makatList = [];
    var usedMakatNumbers = new Set();
    for (var i = 1; i <= maxMakats; i++) {
        var randomMakatNumber = void 0;
        do {
            randomMakatNumber = Math.floor(Math.random() * 100000).toString().padStart(6, '0');
        } while (usedMakatNumbers.has(randomMakatNumber));
        usedMakatNumbers.add(randomMakatNumber);
        var randomMkabaz = mkabazList[Math.floor(Math.random() * mkabazList.length)];
        var makat = {
            name: randomMakatNumber,
            _id: "makat-".concat(randomMakatNumber),
            mkabaz: randomMkabaz._id,
        };
        makatList.push(makat);
    }
    return makatList;
};
exports.generateRandomMakats = generateRandomMakats;
exports.MakatModel = (0, mongoose_1.model)("Makat", makatSchema);

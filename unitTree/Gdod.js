"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GdodModel = exports.generateRandomGdod = void 0;
var mongoose_1 = require("mongoose");
var gdodSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true },
    sadir: { type: String, enum: ["סדיר", "לא סדיר"], required: true },
    hativa: { type: String, required: true },
});
var generateRandomGdod = function (hativas) {
    var gdodList = [];
    var usedGdodNumbers = new Set();
    for (var i = 1; i <= hativas.length * 10; i++) {
        var gdodNumber = void 0;
        do {
            gdodNumber = Math.floor(Math.random() * 800).toString().padStart(3, '0');
        } while (usedGdodNumbers.has(gdodNumber));
        usedGdodNumbers.add(gdodNumber);
        var gdodName = "\u05D2\u05D3\u05D5\u05D3-".concat(gdodNumber);
        var gdodId = "g".concat(gdodNumber);
        var gdod = {
            name: gdodName,
            _id: gdodId,
            sadir: Math.random() > 0.3 ? "לא סדיר" : "סדיר",
            hativa: hativas[Math.floor(Math.random() * (hativas.length - 1))]._id
        };
        gdodList.push(gdod);
    }
    return gdodList;
};
exports.generateRandomGdod = generateRandomGdod;
exports.GdodModel = (0, mongoose_1.model)("Gdod", gdodSchema);

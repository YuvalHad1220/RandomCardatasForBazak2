"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HativaModel = exports.generateRandomHativa = void 0;
var mongoose_1 = require("mongoose");
var hativaSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true },
    ogda: { type: String, required: true },
});
var generateRandomHativa = function (ogdas) {
    var minHativas = 10;
    var maxHativas = Math.floor(ogdas.length * 4);
    var numberOfHativas = Math.floor(Math.random() * (maxHativas - minHativas + 1)) + minHativas;
    var usedHativaNumbers = new Set();
    var hativaList = [];
    for (var i = 1; i <= numberOfHativas; i++) {
        var hativaNumber = void 0;
        do {
            hativaNumber = Math.floor(Math.random() * 100).toString().padStart(3, '0');
        } while (usedHativaNumbers.has(hativaNumber));
        usedHativaNumbers.add(hativaNumber);
        var hativaName = "\u05D7\u05D8\u05D9\u05D1\u05D4-".concat(hativaNumber);
        var hativaId = "h".concat(hativaNumber);
        var hativa = {
            name: hativaName,
            _id: hativaId,
            ogda: ogdas[Math.floor(Math.random() * (ogdas.length - 1))]._id
        };
        hativaList.push(hativa);
    }
    return hativaList;
};
exports.generateRandomHativa = generateRandomHativa;
exports.HativaModel = (0, mongoose_1.model)("Hativa", hativaSchema);

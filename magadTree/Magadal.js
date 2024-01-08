"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagadalModel = exports.generateRandomMagadals = void 0;
var mongoose_1 = require("mongoose");
var Shuffle_1 = require("../Shuffle");
var magadalSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true },
});
var magadalNames = [
    'תותח',
    'אקדח',
    'רקטה',
    'טנק',
    'נגמש',
    'צוללת',
    'סירת מלחמה',
    'מסוק',
    'מטוס קרב',
    'רובה',
    'קרבן',
    'פצצה',
    'רמות',
    'מטרה',
    'סלינג',
    'צינור',
    'פלמ"ח',
    'צנחן',
    'תיקול',
];
var generateRandomMagadals = function () {
    var numberOfMagadals = 10;
    var magadalList = [];
    var magadalNameCopy = __spreadArray([], magadalNames, true);
    var usedMagadalNumbers = new Set();
    (0, Shuffle_1.shuffle)(magadalNameCopy);
    for (var i = 1; i <= numberOfMagadals; i++) {
        var magadalNumber = void 0;
        do {
            magadalNumber = Math.floor(Math.random() * 200).toString().padStart(3, '0');
        } while (usedMagadalNumbers.has(magadalNumber));
        usedMagadalNumbers.add(magadalNumber);
        var magadalId = "magadal-".concat(magadalNumber);
        var magadalName = magadalNameCopy.pop();
        var magadal = {
            name: magadalName,
            _id: magadalId,
        };
        magadalList.push(magadal);
    }
    return magadalList;
};
exports.generateRandomMagadals = generateRandomMagadals;
exports.MagadalModel = (0, mongoose_1.model)("Magadal", magadalSchema);

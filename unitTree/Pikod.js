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
exports.PikodModel = exports.generateRandomPikod = void 0;
var mongoose_1 = require("mongoose");
var Shuffle_1 = require("../Shuffle");
var pikodSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true },
});
var pikodNames = [
    'פיקוד צפון',
    'פיקוד דרום',
    'פיקוד מרכז',
    'פיקוד הים',
    'פיקוד האוויר',
    'פיקוד ירושלים',
    'פיקוד המצפור',
    'פיקוד הקרקע',
    'פיקוד חיל האוויר והחלל',
    'פיקוד חיל ההגנה',
];
var generateRandomPikod = function () {
    var numberOfPikods = 4;
    var pikodList = [];
    var usedPikodNumbers = new Set();
    var pikodNamesCopy = __spreadArray([], pikodNames, true);
    (0, Shuffle_1.shuffle)(pikodNamesCopy);
    for (var i = 1; i <= numberOfPikods; i++) {
        var pikodNumber = void 0;
        do {
            pikodNumber = i.toString().padStart(3, '0');
        } while (usedPikodNumbers.has(pikodNumber));
        usedPikodNumbers.add(pikodNumber);
        var pikodLocation = pikodNamesCopy.pop();
        var pikodId = "p".concat(pikodNumber);
        var pikod = {
            name: pikodLocation,
            _id: pikodId,
        };
        pikodList.push(pikod);
    }
    return pikodList;
};
exports.generateRandomPikod = generateRandomPikod;
exports.PikodModel = (0, mongoose_1.model)("Pikod", pikodSchema);

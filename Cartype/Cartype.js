"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartypeModel = exports.generateCarType = void 0;
var mongoose_1 = require("mongoose");
var cartypeSchema = new mongoose_1.Schema({
    carType: { type: String },
    weight: { type: String },
});
var carType = [
    "אקסלנס",
    "פנתר",
    "טורבו-דינמיק",
    "פלאש",
    "טכנולוגיה X",
    "אופטימה",
    "גלקסיה",
    "פרימיום",
    "אנרגיה ירוקה",
    "רדיאנט"
];
var generateRandomCarWeight = function () {
    var randomNumber = Math.floor(Math.random() * 8000 + 1000); // Generate a random number up to 8 digits
    return "".concat(randomNumber.toString(), " \u05E7\u05D2");
};
var generateCarType = function () {
    var carTypeArr = [];
    carType.forEach(function (type) {
        var newtype = {
            _id: new mongoose_1.default.Types.ObjectId(),
            carType: type,
        };
        if (Math.random() > 0.6) {
            newtype.weight = generateRandomCarWeight();
        }
        carTypeArr.push(newtype);
    });
    return carTypeArr;
};
exports.generateCarType = generateCarType;
exports.CartypeModel = mongoose_1.default.model("cartype", cartypeSchema);

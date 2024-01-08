"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardataModel = exports.generateRandomCardatas = void 0;
var mongoose_1 = require("mongoose");
// Define the schema
var cardataSchema = new mongoose_1.Schema({
    carnumber: { type: String },
    gdodId: { type: String },
    makatId: { type: String },
    carTypeId: { type: mongoose_1.default.Types.ObjectId },
});
// Function to generate random dates within the specified range
var getRandomDateInRange = function (start, end) {
    var randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
};
// Function to generate random 8-digit car number
var generateRandomCarNumber = function () {
    var randomNumber = Math.floor(Math.random() * 90011100); // Generate a random number up to 8 digits
    return randomNumber.toString().padStart(8, "0");
};
var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};
var generateRandomCardatas = function (count, makats, gdods, cartypeArr) {
    var cardataList = [];
    for (var i = 0; i < count; i++) {
        var randomMakat = getRandomElement(makats);
        var cardata = {
            _id: new mongoose_1.default.Types.ObjectId(),
            carnumber: generateRandomCarNumber(),
            makatId: randomMakat._id,
            gdodId: getRandomElement(gdods)._id,
            carTypeId: getRandomElement(cartypeArr)._id,
        };
        cardataList.push(cardata);
    }
    return cardataList;
};
exports.generateRandomCardatas = generateRandomCardatas;
// Create the model
exports.CardataModel = mongoose_1.default.model("Cardata", cardataSchema);

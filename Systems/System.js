"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemModel = exports.generateSystems = void 0;
var Shuffle_1 = require("../Shuffle");
var mongoose_1 = require("mongoose");
var possibleSystemNames = [
    'בלוטופ',
    'וויי-פיי',
    'מעיל רוח',
    'מסך',
    'סאונדבלאסט',
    'נטליגנט',
    'פלאשגורדון',
    'ספייסקופ',
    'אנרגיה גריזלי',
    'פלוטוניום',
    'סולאריס',
    'אקליפס',
    'קוואזר',
    'מקסימיליאן',
    'ספרקטרום',
    'איקספלורר',
    'אלגוריתם',
    'קווינטור',
    'זנית רכיבה',
];
var generateSystems = function () {
    var systems = [];
    var numOfSystems = 6;
    (0, Shuffle_1.shuffle)(possibleSystemNames);
    for (var i = 0; i < numOfSystems; i++) {
        var mashbitValue = i < 3 ? i < 2 ? i < 1 ? "0" : "1" : "2" : (Math.floor(Math.random() * 3)).toString();
        var system = {
            name: possibleSystemNames.pop(),
            mashbit: mashbitValue,
            _id: new mongoose_1.default.Types.ObjectId()
        };
        systems.push(system);
    }
    return systems;
};
exports.generateSystems = generateSystems;
// Define the schema
var systemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    mashbit: { type: String, enum: ["0", "1", "2"], required: true },
});
// Create the model
exports.SystemModel = mongoose_1.default.model("System", systemSchema);

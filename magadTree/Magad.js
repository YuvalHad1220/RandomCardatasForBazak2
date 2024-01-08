"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagadModel = exports.generateRandomMagads = void 0;
var mongoose_1 = require("mongoose");
var magadSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true },
    magadal: { type: String, required: true },
});
var magadNames = [
    'איתן',
    'דביר',
    'יובל',
    'ניב',
    'חני',
    'קורן',
    'טוני',
    'דניאל',
    'שירה',
    'רוני',
    'אביב',
    'מיה',
    'אלון',
    'ליאון',
    'עידן',
    'ספיר',
    'נעם',
    'ליה',
    'אורי',
    'אילה',
    'רומי',
    'נועה',
    'מיכאל',
    'גיל',
    'אור',
    'טל',
    'אילן',
    'מיה',
    'שחר',
];
var generateRandomMagads = function (magadalList) {
    var minMagads = 8;
    var numOfMagads = Math.floor(Math.random() * (magadalList.length * 3 - minMagads + 1) + minMagads);
    var magadList = [];
    var usedMagadNumbers = new Set();
    for (var i = 1; i <= numOfMagads; i++) {
        var magadNumber = void 0;
        do {
            magadNumber = Math.floor(Math.random() * 200).toString().padStart(3, '0');
        } while (usedMagadNumbers.has(magadNumber));
        usedMagadNumbers.add(magadNumber);
        var magadId = "magad-".concat(magadNumber);
        var magadName = magadNames[Math.floor(Math.random() * magadNames.length)];
        var randIndex = Math.floor(Math.random() * (magadalList.length - 1));
        var magad = {
            name: magadalList[randIndex].name + " " + magadName,
            _id: magadId,
            magadal: magadalList[randIndex]._id
        };
        magadList.push(magad);
    }
    return magadList;
};
exports.generateRandomMagads = generateRandomMagads;
exports.MagadModel = (0, mongoose_1.model)("Magad", magadSchema);

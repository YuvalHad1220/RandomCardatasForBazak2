"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OgdaModel = exports.generateRandomOgda = void 0;
var mongoose_1 = require("mongoose");
var ogdaSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true },
    pikod: { type: String, required: true },
});
var ogdaNames = [
    'אוגדת הנשמה',
    'אוגדת הגלקטיקה',
    'אוגדת הפלאים',
    'אוגדת החלל',
    'אוגדת השאלות',
    'אוגדת החלומות',
    'אוגדת הסקרנות',
    'אוגדת הזהות',
    'אוגדת השקפצנות',
    'אוגדת המסע',
    'אוגדת הפוליטיקה',
    'אוגדת החיים',
    'אוגדת העצמאות',
    'אוגדת התהפוכות',
    'אוגדת החופש',
    'אוגדת הדמוקרטיה',
    'אוגדת המגמות',
    'אוגדת הצבעים',
    'אוגדת התעוזה',
    'אוגדת ההתמודדות',
    'אוגדת השקפה',
    'אוגדת השינוי',
    'אוגדת האמונה',
    'אוגדת השמיים',
    'אוגדת המערכות',
    'אוגדת ההתמקמות',
    'אוגדת הקוד',
    'אוגדת האהבה',
    'אוגדת החום',
    'אוגדת הקרח',
    'אוגדת הרוח',
    'אוגדת האומץ',
    'אוגדת הניצחון',
    'אוגדת הסלע',
    'אוגדת התפקיד',
    'אוגדת הכוח',
    'אוגדת הזמן',
    'אוגדת הרגע',
    'אוגדת המציאות',
    'אוגדת התכנון',
    'אוגדת ההתמדה',
    'אוגדת המחויבות',
    'אוגדת השקיפה',
    'אוגדת ההתרגשות',
    'אוגדת הכוחות',
    'אוגדת הקודש',
    'אוגדת ההתמקמות',
    'אוגדת המסלול',
    'אוגדת השגרה',
    'אוגדת השאיפה',
];
var generateRandomOgda = function (pikods) {
    var minOgdas = 8;
    var maxOgdas = Math.floor(pikods.length * 4);
    var numberOfOgdas = Math.floor(Math.random() * (maxOgdas - minOgdas + 1)) + minOgdas;
    var ogdaList = [];
    var usedOgdaNumbers = new Set();
    for (var i = 1; i <= numberOfOgdas; i++) {
        var ogdaNumber = void 0;
        do {
            ogdaNumber = i.toString().padStart(3, '0');
        } while (usedOgdaNumbers.has(ogdaNumber));
        usedOgdaNumbers.add(ogdaNumber);
        var ogdaName = ogdaNames[Math.floor(Math.random() * ogdaNames.length)];
        var ogdaId = "o".concat(ogdaNumber);
        var ogda = {
            name: ogdaName,
            _id: ogdaId,
            pikod: pikods[Math.floor(Math.random() * (pikods.length - 1))]._id
        };
        ogdaList.push(ogda);
    }
    return ogdaList;
};
exports.generateRandomOgda = generateRandomOgda;
exports.OgdaModel = (0, mongoose_1.model)("Ogda", ogdaSchema);

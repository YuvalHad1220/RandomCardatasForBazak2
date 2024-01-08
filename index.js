"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Magad_1 = require("./magadTree/Magad");
var Magadal_1 = require("./magadTree/Magadal");
var Makat_1 = require("./magadTree/Makat");
var Mkabaz_1 = require("./magadTree/Mkabaz");
var Gdod_1 = require("./unitTree/Gdod");
var Hativa_1 = require("./unitTree/Hativa");
var Ogda_1 = require("./unitTree/Ogda");
var Pikod_1 = require("./unitTree/Pikod");
var Cardata_1 = require("./Cardata/Cardata");
var Cartype_1 = require("./Cartype/Cartype");
var magadals = (0, Magadal_1.generateRandomMagadals)();
var magads = (0, Magad_1.generateRandomMagads)(magadals);
var mkabazs = (0, Mkabaz_1.generateRandomMkabazs)(magads);
var makats = (0, Makat_1.generateRandomMakats)(mkabazs);
console.log("created magad tree");
// console.log(magadals, magads, mkabazs, makats)
var pikods = (0, Pikod_1.generateRandomPikod)();
var ogdas = (0, Ogda_1.generateRandomOgda)(pikods);
var hativas = (0, Hativa_1.generateRandomHativa)(ogdas);
var gdods = (0, Gdod_1.generateRandomGdod)(hativas);
console.log("created unit tree");
// console.log(pikods, ogdas, hativas, gdods)
var carTypes = (0, Cartype_1.generateCarType)();
// console.log(systems, systemsToMakats);
var cardatas = (0, Cardata_1.generateRandomCardatas)(220000, makats, gdods, carTypes);
console.log("created cardatas. preparing to insert..");
// Function to insert documents of a specific type
var insertDocuments = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data.model.insertMany(data.docs)];
            case 1:
                _a.sent();
                console.log("".concat(data.model.modelName, " documents inserted successfully."));
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Error inserting ".concat(data.model.modelName, " documents:"), error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Connect to the MongoDB database
mongoose_1.default.connect('mongodb://localhost:27017/TowingLogDB').then(function () { return __awaiter(void 0, void 0, void 0, function () {
    var insertOperations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                insertOperations = [
                    { model: Magadal_1.MagadalModel, docs: magadals },
                    { model: Magad_1.MagadModel, docs: magads },
                    { model: Mkabaz_1.MkabazModel, docs: mkabazs },
                    { model: Makat_1.MakatModel, docs: makats },
                    { model: Pikod_1.PikodModel, docs: pikods },
                    { model: Ogda_1.OgdaModel, docs: ogdas },
                    { model: Hativa_1.HativaModel, docs: hativas },
                    { model: Gdod_1.GdodModel, docs: gdods },
                    { model: Cartype_1.CartypeModel, docs: carTypes },
                    { model: Cardata_1.CardataModel, docs: cardatas }
                ];
                // Use Promise.all to execute all insert operations concurrently
                return [4 /*yield*/, Promise.all(insertOperations.map(insertDocuments))];
            case 1:
                // Use Promise.all to execute all insert operations concurrently
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }).then(function () { return mongoose_1.default.connection.close(); });

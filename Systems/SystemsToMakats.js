"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemToMakatModel = exports.generateSystemToMakatList = void 0;
var mongoose_1 = require("mongoose");
// Define the schema
var systemToMakatSchema = new mongoose_1.Schema({
    makatId: { type: String, required: true },
    systemId: { type: mongoose_1.default.Types.ObjectId, required: true },
});
var generateSystemToMakatList = function (makats, systems) {
    var systemToMakatList = [];
    for (var _i = 0, makats_1 = makats; _i < makats_1.length; _i++) {
        var makat = makats_1[_i];
        // Determine the number of systems for each makat (random between 0 and systems.length - 1)
        var numOfSystems = Math.floor(Math.random() * (systems.length));
        // Get unique random system indices
        var randomSystemIndices = [];
        while (randomSystemIndices.length < numOfSystems) {
            var randomIndex = Math.floor(Math.random() * systems.length);
            if (!randomSystemIndices.includes(randomIndex)) {
                randomSystemIndices.push(randomIndex);
            }
        }
        // Create SystemToMakat entries
        for (var _a = 0, randomSystemIndices_1 = randomSystemIndices; _a < randomSystemIndices_1.length; _a++) {
            var randomIndex = randomSystemIndices_1[_a];
            var systemToMakat = {
                makatId: makat._id,
                systemId: systems[randomIndex]._id,
            };
            systemToMakatList.push(systemToMakat);
        }
    }
    return systemToMakatList;
};
exports.generateSystemToMakatList = generateSystemToMakatList;
// Create the model
exports.SystemToMakatModel = mongoose_1.default.model("SystemToMakat", systemToMakatSchema);

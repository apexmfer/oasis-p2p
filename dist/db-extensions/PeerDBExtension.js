"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerDefinition = exports.PeerSchema = void 0;
const mongoose_1 = require("mongoose");
const extensible_mongoose_1 = require("extensible-mongoose");
exports.PeerSchema = new mongoose_1.Schema({
    publicAddress: { type: String, index: true, unique: true },
    manifestURI: { type: String },
    connectionURI: { type: String, required: true },
    lastSeenAt: Number
});
exports.PeerDefinition = { tableName: 'peers', schema: exports.PeerSchema };
class PeerDBExtension extends extensible_mongoose_1.DatabaseExtension {
    getBindableModels() {
        return [
            exports.PeerDefinition
        ];
    }
}
exports.default = PeerDBExtension;
//# sourceMappingURL=PeerDBExtension.js.map
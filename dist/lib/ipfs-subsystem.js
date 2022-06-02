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
Object.defineProperty(exports, "__esModule", { value: true });
const ipfs_http_client_1 = require("ipfs-http-client");
class IpfsSubsystem {
    constructor(mongoDB) {
        this.mongoDB = mongoDB;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            //"http://127.0.0.1:5001"
            const client = (0, ipfs_http_client_1.create)();
            // call Core API methods
            const { cid } = yield client.add('Hello world!');
            console.log('cid', cid);
        });
    }
}
exports.default = IpfsSubsystem;
//# sourceMappingURL=ipfs-subsystem.js.map
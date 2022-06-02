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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extensible_mongoose_1 = __importDefault(require("extensible-mongoose"));
const ipfs_subsystem_1 = __importDefault(require("./lib/ipfs-subsystem"));
const peer_server_1 = __importDefault(require("./lib/peer-server"));
let envmode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        let mongoDB = new extensible_mongoose_1.default();
        yield mongoDB.init('oasisp2p_'.concat(envmode));
        let ipfsSubsystem = new ipfs_subsystem_1.default(mongoDB);
        yield ipfsSubsystem.init();
        let peerServer = new peer_server_1.default(ipfsSubsystem, mongoDB);
        yield peerServer.init();
    });
}
start();
//# sourceMappingURL=index.js.map
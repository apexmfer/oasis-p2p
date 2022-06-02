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
const chai_1 = require("chai");
const ethers_1 = require("ethers");
const extensible_mongoose_1 = __importDefault(require("extensible-mongoose"));
(0, chai_1.should)();
let mongoInterface;
let user;
let otherUser;
describe('Oasis p2p', () => {
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        mongoInterface = new extensible_mongoose_1.default();
        yield mongoInterface.init('oasis_test');
        yield mongoInterface.dropDatabase();
        user = ethers_1.Wallet.createRandom();
        otherUser = ethers_1.Wallet.createRandom();
    }));
    it('can generate a challenge', () => __awaiter(void 0, void 0, void 0, function* () {
    }));
});
//# sourceMappingURL=oasis.test.js.map
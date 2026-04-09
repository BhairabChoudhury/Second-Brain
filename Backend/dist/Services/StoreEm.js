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
exports.storeEmbedding = void 0;
const aiservics_1 = require("./aiservics");
const storeEmbedding = (contentId, text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const COLLECTION = yield (0, aiservics_1.collection)();
        yield COLLECTION.add({
            ids: [contentId],
            documents: [text], // Chroma auto-embedding
        });
    }
    catch (error) {
        console.error("Embedding store error:", error);
    }
});
exports.storeEmbedding = storeEmbedding;
//# sourceMappingURL=StoreEm.js.map
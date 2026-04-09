"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const searchCon_1 = require("../controllers/searchCon");
const AuthMiddleware_1 = require("../Middleware/AuthMiddleware");
const router = express_1.default.Router();
router.post("/search", AuthMiddleware_1.UserMiddleware, searchCon_1.searchContent);
exports.default = router;
//# sourceMappingURL=searchRoute.js.map
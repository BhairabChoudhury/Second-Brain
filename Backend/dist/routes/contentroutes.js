"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contentcontrollers_1 = require("../controllers/contentcontrollers");
const uploadMiddleware_1 = require("../Middleware/uploadMiddleware");
const AuthMiddleware_1 = require("../Middleware/AuthMiddleware");
const router = express_1.default.Router();
router.post("/create", AuthMiddleware_1.UserMiddleware, uploadMiddleware_1.upload.single("file"), contentcontrollers_1.createContent);
router.get("/get", AuthMiddleware_1.UserMiddleware, contentcontrollers_1.getAllContent);
router.delete("/delete/:id", AuthMiddleware_1.UserMiddleware, contentcontrollers_1.deleteContent);
exports.default = router;
//# sourceMappingURL=contentroutes.js.map
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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./db");
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb+srv://Rocky:8101866244@cluster0.ey9q8vn.mongodb.net/Brainly-Project")
    .then(() => console.log("Mongo Db successfully Conected "))
    .catch(err => console.log("error catch", err));
app.post("api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requiredBody = zod_1.z.object({
        username: zod_1.z.string().min(4).max(14),
        password: zod_1.z.string().min(5)
    });
    const process = requiredBody.safeParse(req.body);
    if (!process.success) {
        res.json({
            message: " Incorect  Formate "
        });
        return;
    }
    const username = req.body.username;
    const password = req.body.password;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield db_1.UserModel.create({
            username: username,
            password: hashedPassword
        });
    }
    catch (err) {
        res.json({ message: "User already exist" });
    }
    res.json({ message: "You have loged in successfully" });
}));
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (rea, res) => {
});
app.listen(3000, () => {
    console.log("✅ Server running on http://localhost:3000");
});
//# sourceMappingURL=index.js.map
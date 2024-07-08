"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerUser_1 = require("../controller/registerUser");
const router = express_1.default.Router();
router.route("/register").post(registerUser_1.RegisterUsers);
exports.default = router;

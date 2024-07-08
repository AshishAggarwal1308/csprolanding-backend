"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectToDataBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectToDataBase = () => {
    mongoose_1.default.connect(process.env.MONGODB || "").then((e) => {
        console.log(`Database connected ${e.connection.host}`);
    }).catch((error) => {
        console.log(error.message);
    });
};
exports.ConnectToDataBase = ConnectToDataBase;

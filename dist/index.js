"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
database_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
    .catch((error) => console.log("Database connection failed:", error));

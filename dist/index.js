"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
const app_1 = __importDefault(require("./app"));
database_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connection established");
    app_1.default.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
    .catch((error) => console.log("Database connection failed:", error));

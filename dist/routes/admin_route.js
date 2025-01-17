"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controllers/admin_controller");
const router = express_1.default.Router();
router.post("/createBranch", admin_controller_1.createBranch);
router.get("/test", (req, res) => res.send("Route works!"));
exports.default = router;

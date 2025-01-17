"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const super_admin_controller_1 = require("../controllers/super_admin_controller");
const super_admin_route = (0, express_1.default)();
super_admin_route.post("/tenent/create", super_admin_controller_1.create_tenant);
exports.default = super_admin_route;

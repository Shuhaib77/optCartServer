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
exports.create_tenant = void 0;
const tenet_service_1 = require("../services/super_admin/tenet_service");
const create_tenant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ message: "all field are nessessory" });
    }
    const data = yield (0, tenet_service_1.tenent_create)(name, password);
    if (!data) {
        return res.status(404).json({ message: "login failed" });
    }
    return res.status(200).json({ message: "login success full", data: data });
});
exports.create_tenant = create_tenant;

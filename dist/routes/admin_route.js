"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controllers/admin_controller");
const router = express_1.default.Router();
router.post("/createBranch", admin_controller_1.createBranch);
router.get('/branches', admin_controller_1.branchGetControl);
router.put('/update/branch/:branchId', admin_controller_1.branchUpdated);
router.post('/product/create', admin_controller_1.productCreate);
router.put('/edit/product/:product_id', admin_controller_1.productUpdate);
router.get('/product/:branchId', admin_controller_1.productGetControl); //this is error
router.delete('/delete/product/:productId', admin_controller_1.productDeleteControl);
exports.default = router;

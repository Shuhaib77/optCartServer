"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controllers/admin_controller");
const router = express_1.default.Router();
router.post("/branches", admin_controller_1.createBranch);
router.get('/branches', admin_controller_1.branchGetControl);
router.put('/branches/:branchId', admin_controller_1.branchUpdated);
//product 
router.post('/products', admin_controller_1.productCreate);
router.put('/products/:productId', admin_controller_1.productUpdate);
router.get('/products/branch/:branchId', admin_controller_1.productGetControl);
router.delete('/products/:productId', admin_controller_1.productDeleteControl);
//user 
router.post('/users', admin_controller_1.userAdd);
router.put('/users/:userId', admin_controller_1.updateUser);
router.get('/users/branch/:branchId', admin_controller_1.userGet);
router.delete('/users/:userId', admin_controller_1.deleteUser);
exports.default = router;

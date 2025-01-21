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
exports.deleteUser = exports.userGet = exports.updateUser = exports.userAdd = exports.productDeleteControl = exports.productGetControl = exports.productUpdate = exports.productCreate = exports.branchUpdated = exports.branchGetControl = exports.createBranch = void 0;
const branch_service_1 = require("../services/admin/branch_service");
const product_service_1 = require("../services/admin/product_service");
const employeeService_1 = require("../services/admin/employeeService");
const createBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tenant_id, branch_name, location } = req.body;
    if (!tenant_id || !branch_name || !location) {
        return res.status(400).json({ message: 'missing required field' });
    }
    const result = yield (0, branch_service_1.branch_service)(tenant_id, branch_name, location);
    if (!result) {
        return res.status(400).json({ message: 'branch creation failed' });
    }
    res.status(201).json(result);
});
exports.createBranch = createBranch;
const branchGetControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const branch = yield (0, branch_service_1.getBranch)();
    if (!branch) {
        return res.status(400).json({ message: 'branches not found' });
    }
    return res.status(200).json({ message: "branched successfully", data: branch });
});
exports.branchGetControl = branchGetControl;
const branchUpdated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { branchId } = req.params;
    if (!branchId) {
        return res.status(400).json({ message: 'branch id is required' });
    }
    const { branch_name, location } = req.body;
    const result = yield (0, branch_service_1.updateBranch)(branchId, branch_name, location);
    if (!result) {
        return res.status(400).json({ message: 'updated failed' });
    }
    return res.status(201).json(result);
});
exports.branchUpdated = branchUpdated;
//product-controls
const productCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { branch_id, name, price, description, quantity } = req.body;
    console.log(branch_id, name, price, description, quantity);
    if (!branch_id || !name || !price || !description || !quantity) {
        return res.status(400).json({ message: 'required field is missing ' });
    }
    const result = yield (0, product_service_1.productService)(branch_id, name, price, description, quantity);
    if (!result) {
        return res.status(400).json({ message: 'product not added' });
    }
    res.status(201).json(result);
});
exports.productCreate = productCreate;
const productUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_id } = req.params;
    const { name, price, description, quantity } = req.body;
    const result = yield (0, product_service_1.productUpdateService)(product_id, name, price, description, quantity);
    if (!result) {
        return res.status(400).json({ message: 'product not updated' });
    }
    res.status(201).json(result);
});
exports.productUpdate = productUpdate;
const productGetControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { branchId } = req.params;
    const product = yield (0, product_service_1.getProducts)(branchId);
    if (!product) {
        return res.status(400).json({ message: 'product not found' });
    }
    return res.status(200).json({ message: "fetched product successfully", data: product });
});
exports.productGetControl = productGetControl;
const productDeleteControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    if (!productId) {
        return res.status(400).json({ message: 'product id is required' });
    }
    const result = yield (0, product_service_1.deleteProductService)(productId);
    if (!result) {
        return res.status(400).json({ message: 'failed to delete the product' });
    }
    res.status(200).json(result);
});
exports.productDeleteControl = productDeleteControl;
//Employee ______________
const userAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { branch_id, name, email, password, role } = req.body;
    if (!branch_id || !name || !email || !password || !role) {
        return res.status(400).json({ message: "required field is missing" });
    }
    const result = yield (0, employeeService_1.employeeService)(branch_id, name, email, password, role);
    if (!result) {
        return res.status(400).json({ message: 'failed to add employee' });
    }
    return res.status(201).json({ result, message: 'product added successfully' });
});
exports.userAdd = userAdd;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const { name, email, password, role } = req.body;
    const result = yield (0, employeeService_1.employeeUpdateService)(user_id, name, email, password, role);
    if (!result) {
        return res.status(400).json({ message: 'filed to update user' });
    }
    res.status(201).json({ data: result, message: 'user updated successfully' });
});
exports.updateUser = updateUser;
const userGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { branchId } = req.params;
    const result = yield (0, employeeService_1.getUserService)(branchId);
    if (!result) {
        return res.status(400).json({ message: 'failed to fetch users' });
    }
    res.status(200).json(result);
});
exports.userGet = userGet;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield (0, employeeService_1.deleteUserService)(userId);
    if (!result) {
        return res.status(400).json({ message: 'failed to delete user' });
    }
    res.status(200).json(result);
});
exports.deleteUser = deleteUser;

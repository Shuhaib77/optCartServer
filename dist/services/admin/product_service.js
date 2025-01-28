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
exports.deleteProductService = exports.getProducts = exports.productUpdateService = exports.productService = void 0;
const database_1 = require("../../config/database");
const Branches_1 = require("../../entities/Branches");
const Product_1 = require("../../entities/Product");
const productService = (branch_id, name, price, description, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const branchRepo = database_1.AppDataSource.getRepository(Branches_1.Branches);
    const productRepo = database_1.AppDataSource.getRepository(Product_1.Product);
    const branch = yield branchRepo.findOneBy({ id: branch_id });
    if (!branch) {
        throw new Error('branch not found');
    }
    const newProduct = productRepo.create({
        branches: branch,
        name,
        price,
        description,
        quantity
    });
    yield productRepo.save(newProduct);
    return {
        message: 'new product created',
        product: newProduct
    };
});
exports.productService = productService;
const productUpdateService = (product_id, name, price, description, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = database_1.AppDataSource.getRepository(Product_1.Product);
    const product = yield productRepo.findOneBy({ id: product_id });
    if (!product) {
        throw new Error('product not found');
    }
    yield productRepo.update(product_id, {
        name: name || product.name,
        price: price || product.price,
        description: description || product.description,
        quantity: quantity || product.quantity
    });
    const updatedproduct = yield productRepo.findOneBy({ id: product_id });
    if (!updatedproduct) {
        throw new Error('error to update product ');
    }
    return {
        message: 'product updated successfully',
        product: updatedproduct
    };
});
exports.productUpdateService = productUpdateService;
const getProducts = (branchId) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = database_1.AppDataSource.getRepository(Product_1.Product);
    const product = yield productRepo.find({
        where: { branches: { id: branchId } },
        relations: ["branches"]
    });
    if (!product || product.length == 0) {
        throw new Error("products not found");
    }
    return product;
});
exports.getProducts = getProducts;
const deleteProductService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = database_1.AppDataSource.getRepository(Product_1.Product);
    const product = yield productRepo.findOneBy({ id: productId });
    if (!product) {
        throw new Error('product not found');
    }
    yield productRepo.delete(productId);
    return { message: 'product deleted succuss fully' };
});
exports.deleteProductService = deleteProductService;

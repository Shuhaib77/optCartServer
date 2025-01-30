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
exports.salesGetService = void 0;
const database_1 = require("../../config/database");
const Sales_1 = require("../../entities/Sales");
const salesGetService = (branchId, startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    const salesRepo = database_1.AppDataSource.getRepository(Sales_1.Sales);
    const query = salesRepo.createQueryBuilder('salesReports')
        .leftJoinAndSelect("salesReports.branch", "branch")
        .leftJoinAndSelect("salesReports.product", "product");
    if (branchId) {
        query.andWhere('branch.id = : branchId', { branchId });
    }
    if (startDate) {
        query.andWhere('sale.date_of_sale >=startDate', { startDate });
    }
    if (endDate) {
        query.andWhere('salesReports.date_of_sale <=endDate ', { endDate });
    }
    const sales = yield query.getMany();
    return sales;
});
exports.salesGetService = salesGetService;

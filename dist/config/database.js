"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../entities/Product");
const dotenv_1 = __importDefault(require("dotenv"));
const Tenant_1 = require("../entities/Tenant");
const user_entity_1 = require("../entities/user_entity");
const Leave_1 = require("../entities/Leave");
const Branches_1 = require("../entities/Branches");
const Sales_1 = require("../entities/Sales");
const jobOpenings_1 = require("../entities/jobOpenings");
const Inventory_1 = require("../entities/Inventory");
const InventoryAudits_1 = require("../entities/InventoryAudits");
const Policies_1 = require("../entities/Policies");
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: true, // Enable SSL for Supabase
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    synchronize: false,
    logging: true,
    entities: [Product_1.Product, Tenant_1.Tenant, user_entity_1.User, Leave_1.Leave, Branches_1.Branches, Policies_1.Policies, Sales_1.Sales, jobOpenings_1.jobOpenings, Inventory_1.inventory, InventoryAudits_1.inventoryAudit],
    migrations: ["dist/migrations/*.js"],
    subscribers: []
});

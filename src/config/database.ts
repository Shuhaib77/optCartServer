import { DataSource } from "typeorm"
import { Product } from "../entities/Product"
import dotenv from "dotenv"
import { Tenant } from "../entities/Tenant"
import { User } from "../entities/user_entity"
import { Leave } from "../entities/Leave"
import { Branches } from "../entities/Branches"
import { Sales, } from "../entities/Sales"
import { jobOpenings } from '../entities/jobOpenings';
import { inventory } from "../entities/Inventory"
import { inventoryAudit } from "../entities/InventoryAudits"
import { Policies } from "../entities/Policies"
import { Attendance } from "../entities/Attendance"
import { payroll } from "../entities/payroll"
import { complaints } from "../entities/Complaints"


dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: true,  // Enable SSL for Supabase
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    synchronize: false,
    logging: true,


    entities: [Product,Tenant,User,Leave,Branches,Policies,Sales,jobOpenings,inventory,inventoryAudit,Attendance,payroll,complaints],

    migrations: ["dist/migrations/*.js"],
    subscribers: []
})
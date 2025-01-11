import { DataSource } from "typeorm"
import { Product } from "../entities/Product"
import dotenv from "dotenv"
import { Tenant } from "../entities/Tenant"

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
    entities: [Product,Tenant],
    migrations: ["src/migrations/*.ts"],
    subscribers: []
})
import Express  from "express";
import { create_tenant } from "../controllers/super_admin_controller";

const super_admin_route=Express()

super_admin_route.post("/tenent/create",create_tenant)

export default super_admin_route


import { Request, Response } from "express";
import { tenent_create } from "../services/super_admin/tenet_service";

export const create_tenant = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ message: "all field are nessessory" });
  }
  const data = await tenent_create(name, password);
  
  if (!data) {
    return res.status(404).json({ message: "login failed" });
  }
  return res.status(200).json({ message: "login success full", data: data });
  
};

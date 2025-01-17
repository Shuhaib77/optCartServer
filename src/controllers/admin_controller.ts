import { AppDataSource } from "../config/database";
import { Tenant } from "../entities/Tenant";
import { Branches } from "../entities/Branches";
import { Request, Response } from "express";
import { FindOptionsWhere } from "typeorm";

export const createBranch = async (req:Request,res:Response):Promise<Response> =>{
    const {tenant_id, branch_name,location}=req.body

    try {
      const tenantRepo=AppDataSource.getRepository(Tenant)
      const branchRepo=AppDataSource.getRepository(Branches)

      const tenant=await tenantRepo.findOneBy({id:tenant_id} as FindOptionsWhere<Tenant>)
      if(!tenant){
        return res.status(400).json({message:"tenant not found"});
      }

      const newBranch= branchRepo.create({
        branch_name,
        location,
        tenant
      })

      await branchRepo.save(newBranch);
      return  res.status(201).json({ message: "Branch created successfully", branchId: newBranch.id });
    } catch (error:any) {
      return res.status(500).json({message:error.message})
    }
}
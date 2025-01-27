import {  FindOptionsWhere } from "typeorm"
import { AppDataSource } from "../../config/database"
import { Branches } from "../../entities/Branches"
import { Tenant } from "../../entities/Tenant"

export const branch_service=async(tenant_id:string, branch_name:string,location:string)=>{
  
    const tenantRepo=AppDataSource.getRepository(Tenant)
    const branchRepo=AppDataSource.getRepository(Branches)

    const tenant= await tenantRepo.findOneBy({tenant_id:tenant_id} as FindOptionsWhere<Tenant>)
    if(!tenant){
        throw new Error('tenant not found')
    }
     
    const data=await branchRepo.findOneBy({branch_name:branch_name})
    if(data){
        throw new Error("branch already exist")
    }

    const newBranch=branchRepo.create({
        tenant:tenant,
        branch_name:branch_name,
        location:location
    })
   await branchRepo.save(newBranch)

   return {message:'branch created successfully',
    branch:newBranch
   }
}

export const getBranch=async()=>{
    const branchRepo=AppDataSource.getRepository(Branches)

    const branches=await branchRepo.find()
    if(!branches){
        throw new Error("branches not found")
    }
    return branches
}

export const updateBranch=async(
    branchId:string, branch_name:string,location:string
    )=>{
   const branchRepo=AppDataSource.getRepository(Branches)

   

   const branch= await branchRepo.findOneBy({id:branchId})
   if(!branch){
    throw new Error('branch not found')
   }

   await branchRepo.update(branchId,{
    branch_name:branch_name|| branch.branch_name,
    location:location || branch.location
   })

   const updatedBranch = await branchRepo.findOneBy({ id: branchId });

   return {
    message:'branch updated success fully',
    branch:updatedBranch
   }

   
}
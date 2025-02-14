import { AppDataSource } from "../../config/database"
import { Branches } from "../../entities/Branches"
import { inventory } from "../../entities/Inventory"



export const createInventry_service=async(branchId:string,product_name:string,about_product:string,stock_leval:Number,price:Number,is_active:Boolean)=>{
      const inventoryRepo=AppDataSource.getRepository(inventory)
      const branch=AppDataSource.getRepository(Branches)
      const branches= await branch.findOneBy({id:branchId})
      if(!branch){
        throw new Error('branch not found')
      }
      let inventoryProduct=await inventoryRepo.findOneBy({
              
               product_name:product_name
      })
      if(inventoryProduct){
        throw new Error('product alredy exist in inventyory')
      }
     const  newInventoryProduct= inventoryRepo.create({
        branches,
        product_name,
        about_product,
        stock_leval,
        price,

      })
//ghkjl;;
await inventoryRepo.save(newInventoryProduct)


     
}
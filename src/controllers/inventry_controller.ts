import { Request, Response } from "express";
import { createInventry_service } from "../services/inventory/inventry_product";



export const create_Inventory = async (req:Request,res:Response) =>{
    const {branchId,product_name,about_product,stock_leval, price, is_active,}=req.body
    

    if(!branchId || !product_name || !about_product|| !stock_leval || !price ||! is_active){
      return res.status(400).json({message:'missing required field'})
    }

    const result= await createInventry_service(branchId,product_name,about_product,stock_leval, price, is_active,);
    if(!result){
      return res.status(400).json({message:'jobOpenings creation failed'})
    }

    res.status(201).json(result)

}
// price!: number;
//   @Column({ default: true })
//   is_active!: boolean;
//   @CreateDateColumn({ type: "timestamp" })
//   created_at!: Date;
//   @UpdateDateColumn({ type: "timestamp" })
//   updated_at!: Date;
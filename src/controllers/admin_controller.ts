import { Request, Response } from "express";
import { branch_service, getBranch, updateBranch } from "../services/admin/branch_service";
import { deleteProductService, getProducts, productService, productUpdateService } from "../services/admin/product_service";

export const createBranch = async (req:Request,res:Response) =>{
    const {tenant_id, branch_name,location}=req.body
    console.log(tenant_id,branch_name,location);
    

    if(!tenant_id|| !branch_name|| !location){
      return res.status(400).json({message:'missing required field'})
    }

    const result= await branch_service(tenant_id,branch_name,location);
    if(!result){
      return res.status(400).json({message:'branch creation failed'})
    }

    res.status(201).json(result)

}



export const branchGetControl=async(req:Request,res:Response)=>{
   const branch=await getBranch()
   if(!branch){
    return res.status(400).json({message:'branches not found'})
   }
   return res.status(200).json({message:"branched successfully",data:branch})
}



export const branchUpdated=async(req:Request,res:Response)=>{
   const {branchId}=req.params
  if(!branchId){
    return res.status(400).json({message:'branch id is required'})
  }
  const {branch_name,location}=req.body
  
  const result=await updateBranch(branchId,branch_name,location)
  if(!result){
    return res.status(400).json({message:'updated failed'})
  }

  return res.status(201).json(result)

}

//product-controls


export const productCreate=async(req:Request,res:Response)=>{
  const {branch_id,name,price,description,quantity}=req.body
console.log(branch_id,name,price,description,quantity);

  if(!branch_id || !name|| !price || !description || !quantity){
    return res.status(400).json({message:'required field is missing '})
  }

  const result=await productService(branch_id,name,price,description,quantity);
  if(!result){
    return res.status(400).json({message:'product not added'})
  }
  res.status(201).json(result)

}

export const productUpdate=async (req:Request,res:Response)=>{
  const {product_id}=req.params;
  const {name,price,description,quantity}=req.body;


  const result=await productUpdateService(product_id,name,price,description,quantity);
  if(!result){
    return res.status(400).json({message:'product not updated'})
  }

  res.status(201).json(result)

}


export const productGetControl=async(req:Request,res:Response)=>{
  const {branchId}=req.params;
  const product=await getProducts(branchId)
  if(!product){
   return res.status(400).json({message:'product not found'})
  }
  return res.status(200).json({message:"fetched product successfully",data:product})
}



export const productDeleteControl=async(req:Request,res:Response)=>{
  const {productId}=req.params;

  if(!productId){
    return res.status(400).json({message:'product id is required'})
  }

  const result=await deleteProductService(productId)
  if(!result){
    return res.status(400).json({message:'failed to delete the product'})
  }
  res.status(200).json(result)
}






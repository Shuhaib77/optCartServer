import { Request, Response } from "express";
import { branch_service, getBranch, updateBranch } from "../services/admin/branch_service";
import { deleteProductService, getProducts, productService, productUpdateService } from "../services/admin/product_service";
import { deleteUserService, employeeService, employeeUpdateService, getUserService } from "../services/admin/employeeService";

export const createBranch = async (req:Request,res:Response) =>{
    const {tenant_id, branch_name,location}=req.body
    

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


//Employee ______________



export const userAdd=async(req:Request,res:Response)=>{
  const {branch_id, name,email, password, role, category }=req.body

  if(!branch_id || !name || !email || !password || !role ){
    return res.status(400).json({message:"required field is missing"})
  }

  const result= await employeeService(branch_id, name,email, password, role, category);
  if(!result){
    return res.status(400).json({message:'failed to add employee'})
  }

  return res.status(201).json({result,message:'product added successfully'})
  
}


export const  updateUser=async(req:Request,res:Response)=>{
  const {user_id}=req.params;
  const {name,email, password, role}=req.body;

 const result= await employeeUpdateService(user_id, name,email, password, role);
 if(!result){
  return res.status(400).json({message:'filed to update user'})
 }
 
 res.status(201).json({data:result,message:'user updated successfully'})

}


export const userGet=async(req:Request,res:Response)=>{
  const {branchId}=req.params;

  const result=await getUserService(branchId);
  if(!result){
    return res.status(400).json({message:'failed to fetch users'})
  }

  res.status(200).json(result)
}


export const deleteUser=async(req:Request,res:Response)=>{
  const {userId}=req.params;

  const result=await deleteUserService(userId)
  if(!result){
    return res.status(400).json({message:'failed to delete user'})
  }

  res.status(200).json(result)
}









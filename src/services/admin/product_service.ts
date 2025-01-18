import { AppDataSource } from "../../config/database"
import { Branches } from "../../entities/Branches"
import { Product } from "../../entities/Product"

export const productService=async(
    branch_id:string,name:string,price:number,description:string,quantity:number
    )=>{
    
    const branchRepo=AppDataSource.getRepository(Branches)
    const productRepo=AppDataSource.getRepository(Product)

    const branch=await branchRepo.findOneBy({id:branch_id})
    if(!branch){
        throw new Error('branch not found')
    }

    const newProduct=productRepo.create({
        name,
        price,
        description,
        quantity
    })

    await productRepo.save(newProduct)

    return {
        message:'new product created',
        product:newProduct
    }
}


export const productUpdateService=async(
    product_id:string,name:string,price:number,description:string,quantity:number
    )=>{
    const productRepo=AppDataSource.getRepository(Product)

    const product= await productRepo.findOneBy({id:product_id})
    if(!product){
        throw new Error('product not found')
    }

   await productRepo.update(product_id,{
      name:name|| product.name,
      price:price|| product.price,
      description:description|| product.description,
      quantity:quantity|| product.quantity
    })

    const updatedproduct= await productRepo.findOneBy({id:product_id})
    if(!updatedproduct){
        throw new Error('error to update product ')
    }

    return {
        message:'product updated successfully',
        product:updatedproduct
    }

}


export const getProducts=async(branchId:string)=>{
    const productRepo=AppDataSource.getRepository(Product)

    const product=await productRepo.find({
        where:{branches:{id:branchId}},
        relations:["branches"]
    })
    
    if(!product|| product.length==0){
        throw new Error("products not found")
    }
    return product
}


export const deleteProductService=async(productId:string)=>{
    const productRepo=AppDataSource.getRepository(Product)

    const product=await productRepo.findOneBy({id:productId})

    if(!product){
        throw new Error('product not found')
    }

    await productRepo.delete(productId)

    return {message:'product deleted succuss fully'}

}
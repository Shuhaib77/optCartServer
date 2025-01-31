import { FindOptionsWhere, FindTreeOptions } from "typeorm"
import { AppDataSource } from "../../config/database"
import { Branches } from "../../entities/Branches"
import { User } from "../../entities/user_entity"

export const employeeService = async (
    branch_id: string, 
    name: string, 
    email: string, 
    password: string, 
    role: "admin" | "hr_manager" | "staff_head" | "staff", 
    category?: "sales" | "inventory" | "Finance" | "customer_service"
  ) => {
    const branchRepo = AppDataSource.getRepository(Branches);
    const userRepo = AppDataSource.getRepository(User);
  
    const branch = await branchRepo.findOneBy({ id: branch_id });
  
    if (!branch) {
      throw new Error("Branch not found");
    }
  
    const existingUser = await userRepo.findOneBy({ email: email });
    if (existingUser) {
      throw new Error("User already exists");
    }
  
    // Validate category based on role
    if (role === "staff_head" && !category) {
      throw new Error("Category is required for staff_head role");
    }
  
    if (role !== "staff_head" && category) {
      throw new Error("Only staff_head role can have a category");
    }
  
    const newUser = userRepo.create({
      branch: branch,
      name,
      email,
      password,
      role,
      category: role === "staff_head" ? category : undefined // Ensure other roles do not store category
    });
  
    await userRepo.save(newUser);
  
    return newUser;
  };
  


export const employeeUpdateService=async(
    user_id:number|string, name:string,email:string, password:string, role:"admin"|"hr_manager"| "staff_head"| "staff"
   )=>{

    const userRepo=AppDataSource.getRepository(User)

    const user= await userRepo.findOneBy({id:user_id} as FindOptionsWhere<User>)
    if(!user){
        throw new Error ("user not found")
    }

    await userRepo.update(user_id,{
        name:name|| user.name,
        email:email|| user.email,
        password:password||user.password,
        role:role||user.role
    })

    const updatedUser=await userRepo.findOneBy({id:user_id} as FindOptionsWhere<User>)
    
     return updatedUser

}


export const getUserService=async(branchId:string)=>{
    const userRepo=AppDataSource.getRepository(User)

    const users=await userRepo.find({
        where:{branch:{id:branchId}},
        relations:["branch"]
    })

    if(!users){ 
        throw new Error("failed to fetch users")
    }

    return{
        message:'user fetched successfully',
        users:users
    }

}

export const deleteUserService=async (userId:string|number)=>{
    const userRepo=AppDataSource.getRepository(User)

    const user=await userRepo.findOneBy({id:userId} as FindOptionsWhere<User>)
    if(!user){
        throw new Error("user not found")
    }

    await userRepo.delete(userId)

    return {message:"deleted user successfully"}


}
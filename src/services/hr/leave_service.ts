import { AppDataSource } from "../../config/database"
import { Leave } from "../../entities/Leave"
import { User } from "../../entities/user_entity"


export const updateLeaveRequestService= async(
    name:string,reason:string,start_Date:Date,end_Date:Date,status:string,leaveRequestId:string
   )=>{




    console.log(leaveRequestId,'this is leaver reauaslis s');
   
    const leaveRepo=AppDataSource.getRepository(Leave)


      const leave= await leaveRepo.findOneBy({id:leaveRequestId})
      if(!leave){
        throw new Error('leaveRequest not found')
      }


      await leaveRepo.update(leaveRequestId,{
        name:name || leave.name,
        reason:reason|| leave.reason,
        status:status|| leave.status
      })
     
      const updatedLeave=await leaveRepo.findOneBy({id:leave.id})
      return updatedLeave


}


export const getLeaveRequestService=async()=>{
  const leaveRepo=AppDataSource.getRepository(Leave)
 
 
  const leave=await leaveRepo.find()
  if(!leave){
     throw new Error("some error to fetch the leaveRequests")
  }
 
 
  return leave
 }



 export const getLeaveRequestByIdService=async(leaveId:string)=>{
  const leaveRepo=AppDataSource.getRepository(Leave)
 
  const leave=await leaveRepo.findOneBy({id:leaveId})
  if(!leave){
     throw new Error("some error to fetch the leaveRequests")
  }
 
  return leave
 }

 

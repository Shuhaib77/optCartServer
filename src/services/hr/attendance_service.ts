import { AppDataSource } from "../../config/database"
import { User } from "../../entities/user_entity"
import { Attendance } from "../../entities/Attendance"


export const addAttendanceService=async(
    userId:number|string,status:"present"|"excused"| "unexcused"|"late"|"no status"|"half day"
    )=>{


  const userRepo=AppDataSource.getRepository(User)
  const attendanceRepo=AppDataSource.getRepository(Attendance)


  const user=await userRepo.findOneBy({id:userId})


  if(!user){
    throw new Error('user not found')
  }


  const newAttendance= attendanceRepo.create({
    status,
    
    
  })

  await attendanceRepo.save(newAttendance)


  return newAttendance
 
}



export const updateAttendanceService=async(
    attendanceId:string,status:"present"|"excused"| "unexcused"|"late"|"no status"|"half day",date:Date
    )=>{
    const attendanceRepo=AppDataSource.getRepository(Attendance)


    const attendance= await attendanceRepo.findOneBy({id:attendanceId})
    if(!attendance){
        throw new Error('attendance not found')
    }


   await attendanceRepo.update(attendanceId,{
      status:status|| attendance.status,
      date:date|| attendance.date,
    })


    const updateAttendance= await attendanceRepo.findOneBy({id:attendanceId})
    if(!updateAttendance){
        throw new Error('error to update attendance')
    }


    return updateAttendance;


}



export const getAttendanceService=async()=>{
    const attendanceRepo=AppDataSource.getRepository(Attendance)


    const attendance=await attendanceRepo.find()
    if(!attendance){
        throw new Error('error to fetch attendance ')
    }


    return attendance;
}




export const getAttendanceServiceByUserId=async(userId:string)=>{
    const attendanceRepo=AppDataSource.getRepository(Attendance)


    const attendance=await attendanceRepo.find({
        where:{user:{id:userId}},
        relations:["user"]
    })
    if(!attendance){
        throw new Error('error to fetch attendance ')
    }


    return attendance;
}


import { Request, Response } from "express";
import {deleteJobOpeningsService, getJobOpeningsByIdService, getJobOpeningService, jobOpenings_service, jobOpeningUpdateService} from '../services/hr/jobOpenings';

export const create_jobOpenings = async (req:Request,res:Response) =>{
    const {branchId,job_title,description,requirements, location, salary_range,closed_at}=req.body
    

    if(!branchId ||!job_title|| !description|| !requirements || !location ||! salary_range){
      return res.status(400).json({message:'missing required field'})
    }

    const result= await jobOpenings_service(branchId,job_title,description,requirements, location, salary_range,closed_at);
    if(!result){
      return res.status(400).json({message:'jobOpenings creation failed'})
    }

    res.status(201).json(result)

}


export const updateJobOpenings = async (req:Request,res:Response) =>{
    const {jobOpingId}=req.params;
    const {job_title,description,requirements, location, salary_range,closed_at}=req.body
    

    const result= await jobOpeningUpdateService(jobOpingId,job_title,description,requirements, location, salary_range,closed_at);
    if(!result){
      return res.status(400).json({message:'jobOpenings updating failed'})
    }

    res.status(201).json(result)

}


export const getJobOpenings = async (req:Request,res:Response) =>{

    const result= await getJobOpeningService();
    if(!result){
      return res.status(400).json({message:'jobOpenings fetching failed'})
    }

    res.status(201).json({data:result,message:'jobOpenings fetched successfully'})

}



export const getJobOpeningsById = async (req:Request,res:Response) =>{
    const {jobOpeningsId}=req.params

    const result= await getJobOpeningsByIdService(jobOpeningsId);
    if(!result){
      return res.status(400).json({message:'jobOpenings fetching failed'})
    }

    res.status(201).json({data:result,message:'jobOpenings fetched successfully'})

}



export const jobOpeningsDelete = async (req:Request,res:Response) =>{
    const {jobOpeningsId}=req.params

    const result= await deleteJobOpeningsService(jobOpeningsId);
    if(!result){
      return res.status(400).json({message:'jobOpenings deleting failed'})
    }

    res.status(201).json(result)

}
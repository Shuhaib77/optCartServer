import { AppDataSource } from "../../config/database"
import { SalesReports } from "../../entities/Sales"


export const salesGetService=async (branchId:string,startDate:Date,endDate:Date)=>{
    const salesRepo=AppDataSource.getRepository(SalesReports)

    const query=salesRepo.createQueryBuilder('salesReports')
    .leftJoinAndSelect("salesReports.branch", "branch")
    .leftJoinAndSelect("salesReports.product", "product")
    
    if(branchId){
        query.andWhere('branch.id = : branchId',{branchId});
    }

    if(startDate){
        query.andWhere('sale.date_of_sale >=startDate',{startDate});
    }

    if(endDate){
        query.andWhere('salesReports.date_of_sale <=endDate ',{endDate});
    }

    const sales=await query.getMany()

    return sales;

}
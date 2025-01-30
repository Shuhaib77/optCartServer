import { error, log } from "console";
import { Tenant } from "../../entities/Tenant";
import { AppDataSource } from "../../config/database";
import { FindOptionsWhere } from "typeorm";

export const tenent_create = async (
  name: string,
  password: string,

) => {
  console.log(name, password,);
  const tenantRepo = AppDataSource.getRepository(Tenant);

  const data = await tenantRepo.findOneBy({
    name: name,
  } as FindOptionsWhere<Tenant>);
  if(data){
    throw new Error("tenent alredy exist")
  }
  const new_tenant=tenantRepo.create({
    name:name,
    password:password,
    created_by:name


  })  
  await tenantRepo.save(new_tenant)
  return new_tenant

};

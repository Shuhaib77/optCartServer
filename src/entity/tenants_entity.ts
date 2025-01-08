import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";


@Entity('tenants')
export class Tenant{
    @PrimaryGeneratedColumn()
    tenant_id:number;

}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!:string
    @Column({type:"varchar" })
    tenant_id !:string

}
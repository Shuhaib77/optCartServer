import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Attendance {
    @PrimaryGeneratedColumn()
    id!:string

    
}
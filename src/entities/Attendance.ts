import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user_entity";


@Entity()
export class Attendance {
    @PrimaryGeneratedColumn("uuid")
    id!:string

    @ManyToOne(()=>User,(user)=>user.attendance)
    user!:User

    @Column({type:'enum',
        enum:["present", "excused", "unexcused", "late","no status"],
        nullable:false,
        default:"no status"
    })
    status!:"present"|"excused"| "unexcused"|"late"|"no status"|"half day"

    @CreateDateColumn({type:'timestamp'})
    date!:Date

    @UpdateDateColumn({type:"timestamp"})
    updated_at!:Date


}
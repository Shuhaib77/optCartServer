import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import 'reflect-metadata'
import { Tenant } from "./Tenant";
import { Leave } from "./Leave";
import { Branches } from "./Branches";





@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @ManyToOne(() => Branches, (branch) => branch.users, { onDelete: "CASCADE" })// Define the relationship with Tenant.
  @JoinColumn({ name: "branch_id" }) // Specifies the foreign key column.
  branch!: Branches;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({
     type:'enum',
     enum:[ "admin", "hr_manager", "staff_head", "staff"],
     nullable:false
    }) 
  role!: "admin"| "hr_manager"| "staff_head"| "staff";

    @CreateDateColumn({type:"timestamp", default:()=>"CURRENT_TIMESTAMP"})
    created_at!: Date;

    @UpdateDateColumn({type:'timestamp' , default:()=>"CURRENT_TIMESTAMP"})
    updated_at!: Date;

    @OneToMany(()=>Leave,(leave)=>leave.user)
    leaves!:Leave[];


}

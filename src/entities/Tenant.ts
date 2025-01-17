import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user_entity";
import { Branches } from "./Branches";
import { Policies } from './Policies';


@Entity()
export class Tenant {
  @PrimaryGeneratedColumn()
  tenant_id!: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  name!: string;

  @Column({ type: "varchar", length: 255, unique: true }) 
  password!:string;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at!: Date;

  @Column({ type: "boolean", default: false })
  is_deleted!: boolean; // Use `boolean` instead of string for boolean-like values.


  @Column({ type: "varchar", length: 200 })
  created_by!: string;

  @OneToMany(() => User, (user) => user.tenant) // Establish the relationship with the User table.
  users!: User[];

  @OneToMany(()=>Branches,(branches)=>branches.tenant)
  branches!: Branches[];

  @OneToMany(()=>Policies,(policies)=>policies.tenant)
  Policies!:Policies[];


}

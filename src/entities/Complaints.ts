import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Branches } from "./Branches";

@Entity()
export class complaints {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column({ type: "varchar", nullable: false })
  Discription!: string;
  @Column({ type: "varchar" })
  status!: string;
  @Column({ type: "int" })
  is_active!: boolean;
  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;
  @UpdateDateColumn({ type: "timestamp" })
  updated_at!: Date;
  @ManyToOne(()=>Branches,(branches)=>branches.complaints)
  branches!:Branches


//   @OneToMany(()=>Branches,(Branches)=>Branches.inventory)
//   branches!:[]
}

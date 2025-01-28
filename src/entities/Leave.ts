import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
import { Branches } from "./Branches";
import { User } from "./user_entity";
  
  @Entity()
  export class Leave {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column()
    name!: string;
  
    @Column({ nullable: true })
    reason!: string;
    
    @Column()
    status!:string
  
    @Column({ default: true })
    is_active!: boolean;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;
  
    // Establishing the relationship with the Tenant table
    @ManyToOne(() => Branches, (branches) => branches.leaves, { onDelete: "CASCADE" })
    @JoinColumn({ name: "branch_id" }) // Specifies the foreign key column in the Leave table
    branches!: Branches

    @ManyToOne(()=> User,(branches)=>branches.leaves,{onDelete:'CASCADE'})
    @JoinColumn({name:'user_id'})
    user!:User
  }
  
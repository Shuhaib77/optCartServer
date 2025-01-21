import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tenant } from "./Tenant";
import { Product } from "./Product";
import { Leave } from "./Leave";
import { User } from "./user_entity";
import { SalesReports } from './Sales';
import { jobOpenings } from "./jobOpenings";

@Entity()
export class Branches {
    @PrimaryGeneratedColumn("uuid")
    id!:string

    @Column({type:'varchar', nullable:false})
    branch_name!:string;

    @Column({type:'varchar'})
    location!:string

    @CreateDateColumn({type:'timestamp',default:() => "CURRENT_TIMESTAMP"})
    created_at!:Date

    @UpdateDateColumn({type:"timestamp" , default:()=> "CURRENT_TIMESTAMP"})
    updated_at!:Date

    @ManyToOne(()=> Tenant,(tenent)=>tenent.branches,{onDelete:'CASCADE'})
    @JoinColumn({name:'tenant_id'})
    tenant!:Tenant

    @OneToMany(() => User, (user) => user.branch) // Establish the relationship with the User table.
    users!: User[];

    @OneToMany(()=>Product,(product)=>product.branches)
    products!:Product[];

    @OneToMany(()=>Leave,(leave)=>leave.branches)
    leaves!:Leave[];

    @OneToMany(()=>SalesReports,(sales)=>sales.branches)
    SalesReports!:SalesReports[];

    @OneToMany(()=>jobOpenings,(jobOpenings)=>jobOpenings.branch)
    job_Openings!:jobOpenings[];


    
}
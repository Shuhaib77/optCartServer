import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tenant } from "./Tenant";
import { Product } from "./Product";
import { Leave } from "./Leave";

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

    @OneToMany(()=>Product,(product)=>product.branches)
    products!:Product[];

    @OneToMany(()=>Leave,(leave)=>leave.branches)
    leaves!:Leave[];


    
}
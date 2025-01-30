import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Branches } from "./Branches";



@Entity()
export class inventoryAudit{
    @PrimaryGeneratedColumn("uuid")
    id!:string
    @Column({type:"timestamp"})
    audit_date!:Date
    @Column({type:"jsonb"})
    Discrepancies!:string
    @ManyToOne(()=>Product,(product)=>product.inventory_audits)
    product!:Product
    @ManyToOne(()=>Branches,(branches)=>branches.inventory_audits)
    branch!:Branches
    

}
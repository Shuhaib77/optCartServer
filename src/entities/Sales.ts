import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Branches } from "./Branches";
import { Product } from "./Product";

@Entity()
export class SalesReports {
   @PrimaryGeneratedColumn("uuid")
   id!:string;

   @ManyToOne(()=>Branches,(branches)=>branches.SalesReports)
   @JoinColumn({name:"branchId"})
   branches!:Branches;

   @ManyToOne(()=>Product,(product)=>product.SalesReports)
   @JoinColumn({name:'productId'})
   products!:Product;

   @Column({type:'decimal', nullable:false})
   quantity_sold!:number;

   @Column({type:'decimal', nullable:false})
   total_price!:number;

   @CreateDateColumn({type:'timestamp'})
   date_of_sale!:Date;
    
}
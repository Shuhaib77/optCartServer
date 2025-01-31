import {
   Entity,
   PrimaryGeneratedColumn,
   ManyToOne,
   JoinColumn,
   Column,
   CreateDateColumn,
 } from "typeorm";
 import { User } from "./user_entity";
//  import { Customer } from "./Customer";
 import { Product } from "./Product";
 import { Branches } from "./Branches";
 
 @Entity()
 export class Sales {
   @PrimaryGeneratedColumn("uuid")
   id!: string;
 
   @ManyToOne(() => User, (user) => user.sales)
   @JoinColumn({ name: "staffId" })
   staff!: User;
 
   // @ManyToOne(() => Customer, (customer) => customer.sales)
   // @JoinColumn({ name: "customerId" })
   // customer!: Customer;
 
   @ManyToOne(() => Product, (product) => product.Sales)
   @JoinColumn({ name: "productId" })
   products!: Product;
 
   @ManyToOne(() => Branches, (branch) => branch.Sales)
   @JoinColumn({ name: "branchId" })
   branches!: Branches;
 
   @Column({ type: "decimal", nullable: false })
   quantity!: number;
 
   @Column({ type: "decimal", nullable: false })
   total_price!: number;
 
   @Column({ type: "varchar", length: 20, default: "Pending" })
   status!: string; // Completed, Pending, Cancelled
 
   @CreateDateColumn({ type: "timestamp" })
   sale_date!: Date;
 }
 
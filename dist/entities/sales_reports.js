"use strict";
// import {
//     Entity,
//     PrimaryGeneratedColumn,
//     ManyToOne,
//     JoinColumn,
//     Column,
//     CreateDateColumn,
//   } from "typeorm";
//   import { User } from "./user_entity";
//  //  import { Customer } from "./Customer";
//   import { Product } from "./Product";
//   import { Branches } from "./Branches";
// @Entity()
// export class SalesReportsss {
//   @PrimaryGeneratedColumn("uuid")
//   id!: string;
//   @ManyToOne(() => Branches, (branches) => branches.Sales)
//   @JoinColumn({ name: "branchId" })
//   branch!: Branches;
//   @ManyToOne(() => Product, (product) => product.Sales)
//   @JoinColumn({ name: "productId" })
//   product!: Product;
//   @Column({ type: "decimal", nullable: false })
//   quantity_sold!: number;
//   @Column({ type: "decimal", nullable: false })
//   total_price!: number;
//   @CreateDateColumn({ type: "timestamp" })
//   date_of_sale!: Date;
// }

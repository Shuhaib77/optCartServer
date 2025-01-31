import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Branches } from "./Branches";






@Entity()
export class inventory{
    @PrimaryGeneratedColumn('uuid')
    id!:string
    @Column({type:"varchar",nullable:false})
    product_name!:string
    @Column({type:"varchar"})
    about_product!:string
    @Column({type:"int"})
    stock_leval!:number
    @Column({type:"int"})
    price!:number
    @Column({ default: true })
    is_active!: boolean
    @CreateDateColumn({type:"timestamp"})
    created_at!: Date
    @UpdateDateColumn({type:"timestamp"})
    updated_at!: Date
    // @OneToMany(()=>Branches,(Branches)=>Branches.inventory)
    // branches!:[]
    

     
    



}
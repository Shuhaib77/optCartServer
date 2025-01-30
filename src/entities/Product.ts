import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Branches } from "./Branches";
import { Sales } from './Sales';

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column()
    name!: string

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    price!: number

    @Column({ nullable: true })
    description!: string

    @Column({type:'decimal'})
    quantity!: number

    @Column({ default: true })
    is_active!: boolean

    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    @ManyToOne(()=> Branches,(branches)=>branches.products ,{onDelete:"CASCADE"})
    @JoinColumn({name:'branch_id'})
    branches!:Branches

    @OneToMany(()=>Sales,(sales)=>sales.products)
    Sales!:Sales[];
}

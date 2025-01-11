import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

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

    @Column({ default: true })
    is_active!: boolean

    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date
}

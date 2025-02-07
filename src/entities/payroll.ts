import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class payroll{
    @PrimaryGeneratedColumn('uuid')
    id!:string;

    @Column({type:'decimal'})
    salary_amount!:number;

    @Column({type:'decimal'})
    bonuses!:number;

    @Column({type:'decimal'})
    deductions!:number

    @Column({type:'decimal'})
    net_pay!:number;

    @Column({type:'decimal'})
    payment_date!:number;

    @Column({type:'decimal'})
    tax_withheld!:number;

    @Column({type:"decimal"})
    overtime_hours!:number
    
    @Column({type:'decimal'})
    overtime_pay!:number;

    @Column({type:'decimal'})
    leave_deductions!:number;
     
    @Column({type:'decimal'})
    remarks!:number

    @CreateDateColumn({type:'timestamp'})
    created_at!:Date;

    @UpdateDateColumn({type:'timestamp'})
    Updated_at!:Date;
}
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Branches } from "./Branches";


@Entity()
export class jobOpenings {
    @PrimaryGeneratedColumn('uuid')
    id!:string;

    @Column({type:'varchar',nullable:false})
    job_title!:string;

    @Column({type:'varchar', nullable:false})
    description!:string;

    @Column({type:'varchar'})
    requirements!:string

    @Column({type:'varchar'})
    location!:string
    
    @Column({type:'varchar'})
    salary_range!:string;

    @CreateDateColumn({type:'timestamp'})
    posted_at!:string

    @Column({type:'date'})
    closed_at !: Date;


    @ManyToOne(()=> Branches,(branches)=>branches.job_Openings,{onDelete:"CASCADE"})
    @JoinColumn({name:'branchId'})
    branch!:Branches


}






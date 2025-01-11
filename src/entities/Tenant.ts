import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";


@Entity()
export class Tenant {
  @PrimaryGeneratedColumn()
  tenant_id!: string;
  @Column({ type: "varchar", length: 255, nullable: false })
  name!: string;
  @Column({ type: "varchar", length: 255, unique: true }) 
  @CreateDateColumn({ type: Date })
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;
  @Column({ type: "varchar", length: 200 })
  is_delete!: string;
  @Column({ type: "varchar", length: 200 })
  created_by!: string;
}

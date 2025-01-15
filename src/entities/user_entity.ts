import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import 'reflect-metadata'
import { Tenant } from "./Tenant";





@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Tenant, (tenant) => tenant.users, { onDelete: "CASCADE" })// Define the relationship with Tenant.

  @JoinColumn({ name: "tenant_id" }) // Specifies the foreign key column.
  tenant!: Tenant;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  // @Column()
  // role!:[Admin,]

}

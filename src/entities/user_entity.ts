import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import 'reflect-metadata'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;
}

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
// @Entity()
// export class StaffTasks {
//   @PrimaryGeneratedColumn("uuid")
//   id!: string;
//   @ManyToOne(() => User, (user) => user.tasks)
//   @JoinColumn({ name: "staffId" })
//   staff!: Staff;
//   @Column({ type: "text", nullable: false })
//   task_details!: string;
//   @Column({ type: "varchar", length: 20, default: "Pending" })
//   status!: string; // Pending, Completed
//   @ManyToOne(() => Admin, (admin) => admin.assignedTasks)
//   @JoinColumn({ name: "assigned_by" })
//   assignedBy!: Admin;
//   @Column({ type: "timestamp", nullable: false })
//   due_date!: Date;
// }

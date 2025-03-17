import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserInfo } from "./user-info.entity";

@Entity()
export class UserContact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;

    @Column({ nullable: true })
    fax?: string;

    @Column({ nullable: true })
    linkedIn_url?: string;

    @OneToOne(() => UserInfo, (user) => user.contact, { onDelete: "CASCADE" })
    @JoinColumn()
    user: UserInfo;
}

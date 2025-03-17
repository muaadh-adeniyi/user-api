import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserInfo } from "./user-info.entity";

@Entity()
export class UserAddress {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    zipcode: string;

    @OneToOne(() => UserInfo, (user) => user.address, { onDelete: "CASCADE" })
    @JoinColumn()
    user: UserInfo;
}

import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {UserInfo} from "./user-info.entity";

@Entity()
export class UserAcademics{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text", { array: true })
    schools : string[];

    @ManyToOne(() => UserInfo , (user) => user.academics , {onDelete: "CASCADE"})
    user : UserInfo;
}
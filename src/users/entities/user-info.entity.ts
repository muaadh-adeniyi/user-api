import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import { UserContact } from "./user-contact.entity";
import { UserAddress } from "./user-address.entity";
import { UserAcademics } from "./user-academics.entity";

@Entity()
export class UserInfo {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    profile_photo: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ type: 'date' })
    dateOfBirth: Date;

    @Column()
    occupation: string;

    @Column()
    gender: string;

    @OneToOne(() => UserContact, (contact) => contact.user, { cascade: true, onDelete: "CASCADE" })
    contact: UserContact;

    @OneToOne(() => UserAddress, (address) => address.user, { cascade: true, onDelete: "CASCADE" })
    address: UserAddress;

    @OneToMany(() => UserAcademics, (academics) => academics.user, { cascade: true, onDelete: "CASCADE" })
    academics: UserAcademics[];
}

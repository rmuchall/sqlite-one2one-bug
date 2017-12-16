import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class TestOne {

    @PrimaryGeneratedColumn()
    id: number;

    // -----
    // Bugged relationship
    @Column({nullable: false, unique: true})
    userId: number;
    @OneToOne(type => User, user => user.testOne)
    @JoinColumn()
    user: User;
    // -----

    @Column()
    testOneString: string;

}

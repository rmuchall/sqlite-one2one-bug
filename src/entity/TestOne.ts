import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {BaseEntity} from "./base/BaseEntity";

@Entity()
export class TestOne extends BaseEntity {

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

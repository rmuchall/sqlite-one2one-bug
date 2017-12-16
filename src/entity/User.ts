import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import {TestOne} from "./TestOne";
import {BaseEntity} from "./base/BaseEntity";

@Entity()
export class User extends BaseEntity {

    @Column({unique: true})
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    // ------
    // Bugged relationship
    @OneToOne(type => TestOne, testOne => testOne.user)
    testOne: TestOne;
    // ------

}

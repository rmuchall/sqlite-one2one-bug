import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import {TestOne} from "./TestOne";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

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

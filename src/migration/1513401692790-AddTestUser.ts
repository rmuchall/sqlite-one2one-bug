import {MigrationInterface, QueryRunner} from "typeorm";
import {User} from "../entity/User";

export class AddTestUser1513401692790 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let userRepository = queryRunner.connection.getRepository(User);
        console.log("Inserting a new user into the database.");
        await userRepository.save({
            firstName: "John",
            lastName: "Smith",
            age: 18
        });
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        let userRepository = queryRunner.connection.getRepository(User);
        await userRepository.deleteById(1);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";
import {TestOne} from "../entity/TestOne";

export class AddTestOneEntity1513401698415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let testOneRepository = queryRunner.connection.getRepository(TestOne);
        console.log("Inserting a new test-one entity into the database.");
        await testOneRepository.save({
            userId: 1,
            testOneString: "First"
        });
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        let testOneRepository = queryRunner.connection.getRepository(TestOne);
        await testOneRepository.deleteById(1);
    }

}

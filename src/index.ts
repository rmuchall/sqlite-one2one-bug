import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connection => {

    console.log("Executing any pending migrations...");
    await connection.runMigrations();

}).catch(error => console.log(error));

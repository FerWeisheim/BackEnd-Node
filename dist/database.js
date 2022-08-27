"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.appDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Motokey',
    port: 5432,
    database: 'login',
    entities: [],
    logging: true
});

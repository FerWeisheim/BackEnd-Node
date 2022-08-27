import {DataSource} from 'typeorm'
import {User} from './entitis/user'

export const appDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username:'postgres',
    password: 'Motokey',
    port:5432,
    database:'login',
    entities:[User],
    logging: true,
    synchronize: true
})
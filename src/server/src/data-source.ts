import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Participant } from './entity/Participant';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
	type: 'mariadb',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'test1234',
	database: 'comateq002',
	synchronize: true,
	logging: false,
	entities: [User, Participant],
	migrations: [],
	subscribers: [],
});

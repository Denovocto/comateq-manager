import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Participant } from './entity/Participant';

const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'test1234',
	database: 'comateq002',
	entities: [Participant],
	synchronize: true,
	logging: false,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
	.then(() => {
		// here you can start to work with your database
	})
	.catch(error => console.log(error));

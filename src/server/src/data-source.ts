import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Administrator } from './entity/Administrator';
import { Coordinator } from './entity/Coordinator';
import { LocalizedItem } from './entity/LocalizedItem';
import { LocalizedText } from './entity/LocalizedText';
import { MultipleChoiceOption } from './entity/MultipleChoiceOption';
import { MultipleChoiceProblem } from './entity/MultipleChoiceProblem';
import { OpenQuestionProblem } from './entity/OpenQuestionProblem';
import { Participant } from './entity/Participant';
import { ParticipantGroup } from './entity/ParticipantGroup';
import { ParticipantGroupStatus } from './entity/PaticipantGroupStatus';
import { School } from './entity/School';
import { Test } from './entity/Test';
import { University } from './entity/University';
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
	entities: [
		User,
		Participant,
		Administrator,
		Coordinator,
		LocalizedItem,
		LocalizedText,
		MultipleChoiceOption,
		MultipleChoiceProblem,
		OpenQuestionProblem,
		ParticipantGroup,
		ParticipantGroupStatus,
		School,
		Test,
		University,
	],
	migrations: [],
	subscribers: [],
});

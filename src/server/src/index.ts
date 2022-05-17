import { AppDataSource } from './data-source';
import * as express from 'express';
import { Participant } from './entity/Participant';
import { Administrator } from './entity/Administrator';
import { University } from './entity/University';
import { School } from './entity/School';
import { Test } from './entity/Test';
import { LocalizedText } from './entity/LocalizedText';
import { MultipleChoiceProblem } from './entity/MultipleChoiceProblem';
import { OpenQuestionProblem } from './entity/OpenQuestionProblem';
import { ParticipantGroup } from './entity/ParticipantGroup';
import { ParticipantGroupStatus } from './entity/PaticipantGroupStatus';
import { Coordinator } from './entity/Coordinator';
const app = express();
const port = 8080;
app.use(express.json());

AppDataSource.initialize()
	.then(async () => {
		// console.log('Inserting a new user into the database...');
		// const user = new User();
		// user.firstName = 'Timber';
		// user.lastName = 'Saw';
		// user.age = 25;
		// await AppDataSource.manager.save(user);
		// console.log('Saved a new user with id: ' + user.id);
		// console.log('Loading users from the database...');
		// const users = await AppDataSource.manager.find(User);
		// console.log('Loaded users: ', users);
		// console.log(
		// 	'Here you can setup and run express / fastify / any other framework.'
		// );
		const participantRepository = AppDataSource.getRepository(Participant);
		const coordinatorRepository = AppDataSource.getRepository(Coordinator);
		const administratorRepository = AppDataSource.getRepository(Administrator);
		const universityRepository = AppDataSource.getRepository(University);
		const schoolRepository = AppDataSource.getRepository(School);
		// const testRepository = AppDataSource.getRepository(Test);
		// const localizedTextRepository = AppDataSource.getRepository(LocalizedText);
		// const multipleChoiceProblemRepository = AppDataSource.getRepository(
		// 	MultipleChoiceProblem
		// );
		// const participantGroupRepository =
		// 	AppDataSource.getRepository(ParticipantGroup);
		// const participantGroupStatusRepository = AppDataSource.getRepository(
		// 	ParticipantGroupStatus
		// );
		// const openQuestionProblemRepository =
		// 	AppDataSource.getRepository(OpenQuestionProblem);

		app.get('/', (req, res) => {
			res.send('Hi! I wasnt expecting you here');
		});

		app.get('/participant', async (req, res) => {
			const participants = await participantRepository
				.createQueryBuilder('participant')
				.getMany();
			res.send(participants);
		});

		app.get('/participant/:participantId', async (req, res) => {
			const participant = await participantRepository
				.createQueryBuilder('participant')
				.where('participant.participantId = :participantId', {
					participantId: req.params.participantId,
				})
				.getOne();
			res.send(participant);
		});

		app.post('/participant', async (req, res) => {
			const participant = new Participant();
			participant.participantFirstName = req.body.participantFirstName;
			participant.participantMiddleName = req.body.participantMiddleName;
			participant.participantLastName = req.body.participantLastName;
			participant.participantSecondLastName =
				req.body.participantSecondLastName;
			participant.participantDateOfBirth = req.body.participantDateOfBirth;
			participant.participantGrade = req.body.participantGrade;
			await participantRepository.save(participant);
			res.end();
		});

		app.get('/coordinator', async (req, res) => {
			const coordinators = await coordinatorRepository
				.createQueryBuilder('coordinator')
				.getMany();
			res.send(coordinators);
		});

		app.get('/coordinator/:coordinatorId', async (req, res) => {
			const coordinators = await coordinatorRepository
				.createQueryBuilder('coordinator')
				.where('coordinator.coordinatorId = :coordinatorId', {
					coordinatorId: req.params.coordinatorId,
				})
				.getOne();
			res.send(coordinators);
		});

		app.post('/coordinator', async (req, res) => {
			const coordinator = new Coordinator();
			coordinator.coordinatorFirstName = req.body.coordinatorFirstName;
			coordinator.coordinatorMiddleName = req.body.coordinatorMiddleName;
			coordinator.coordinatorLastName = req.body.coordinatorLastName;
			coordinator.coordinatorSecondLastName =
				req.body.coordinatorSecondLastName;
			coordinator.coordinatorEmail = req.body.coordinatorEmail;
			coordinator.coordinatorRegionalContestName =
				req.body.coordinatorRegionalContestName;
			coordinator.coordinatorRegionalContestLogoURI =
				req.body.coordinatorRegionalContestLogoURI;
			coordinator.coordinatorRegionalContestURL =
				req.body.coordinatorRegionalContestURL;
			await coordinatorRepository.save(coordinator);
			res.end();
		});

		app.get('/administrator', async (req, res) => {
			const administrators = await administratorRepository
				.createQueryBuilder('administrator')
				.getMany();
			res.send(administrators);
		});

		app.get('/administrator/:administratorId', async (req, res) => {
			const administrators = await administratorRepository
				.createQueryBuilder('administrator')
				.where('administrator.administratorId = :administratorId', {
					administratorId: req.params.administratorId,
				});
		});

		app.post('/administrator', async (req, res) => {
			const administrator = new Administrator();
			administrator.administratorFirstName = req.body.administratorFirstName;
			administrator.administratorMiddleName = req.body.administratorMiddleName;
			administrator.administratorLastName = req.body.administratorLastName;
			administrator.administratorSecondLastName =
				req.body.administratorSecondLastName;
			administrator.administratorEmail = req.body.administratorEmail;
			administrator.administratorInstitutionWorkTitle =
				req.body.administratorInstitutionWorkTitle;
			await administratorRepository.save(administrator);
			res.end();
		});

		app.get('/university', async (req, res) => {
			const universities = await universityRepository
				.createQueryBuilder('university')
				.getMany();
			res.send(universities);
		});

		app.get('/university/:universityId', async (req, res) => {
			const universities = await universityRepository
				.createQueryBuilder('university')
				.where('university.universityId = :universityId', {
					universityId: req.params.universityId,
				});
			res.send(universities);
		});

		app.post('/university', async (req, res) => {
			const university = new University();
			university.universityName = req.body.universityName;
			await universityRepository.save(university);
			res.end();
		});

		app.get('/school', async (req, res) => {
			const schools = await schoolRepository
				.createQueryBuilder('school')
				.getMany();
			res.send(schools);
		});

		app.get('/school/:schoolId', async (req, res) => {
			const schools = await schoolRepository
				.createQueryBuilder('school')
				.where('school.schoolId = :schoolId', {
					schoolId: req.params.schoolId,
				});
			res.send(schools);
		});

		app.post('/school', async (req, res) => {
			const school = new School();
			school.schoolName = req.body.schoolName;
			await schoolRepository.save(school);
			res.end();
		});

		app.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`);
		});
	})
	.catch(error => console.log(error));

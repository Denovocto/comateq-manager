import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToOne,
	OneToMany,
	JoinColumn,
} from 'typeorm';
import { MultipleChoiceProblem } from './MultipleChoiceProblem';
import { OpenQuestionProblem } from './OpenQuestionProblem';
import { ParticipantGroup } from './ParticipantGroup';
import { University } from './University';
@Entity()
export class Coordinator {
	@PrimaryGeneratedColumn('uuid')
	coordinatorId: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	coordinatorFirstName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	coordinatorMiddleName?: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	coordinatorLastName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	coordinatorSecondLastName?: string;

	@Column({
		length: 320,
		type: 'varchar',
	})
	coordinatorEmail: string;

	@Column({
		length: 150,
		type: 'varchar',
	})
	coordinatorRegionalContestName?: string;

	@Column({
		length: 2048,
		type: 'varchar',
	})
	coordinatorRegionalContestLogoURI?: string;

	@Column({
		length: 2048,
		type: 'varchar',
	})
	coordinatorRegionalContestURL?: string;

	@OneToOne(type => University, university => university.coordinator)
	@JoinColumn()
	coordinatorUniversity: University;

	@OneToMany(
		type => ParticipantGroup,
		participantGroup => participantGroup.coordinator
	)
	coordinatorOrganizedParticipantGroups: ParticipantGroup[];

	@OneToMany(
		type => OpenQuestionProblem,
		openQuestionProblem => openQuestionProblem.submittedBy
	)
	coordinatorSubmittedOpenQuestionProblems?: OpenQuestionProblem[];

	@OneToMany(
		type => MultipleChoiceProblem,
		multipleChoiceProblem => multipleChoiceProblem.submittedBy
	)
	coordinatorSubmittedMultipleChoiceProblems?: MultipleChoiceProblem[];
}

import {
	Column,
	Entity,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Coordinator } from './Coordinator';
import { LocalizedText } from './LocalizedText';

@Entity()
export class OpenQuestionProblem {
	@PrimaryGeneratedColumn('uuid')
	openQuestionProblemId: string;

	@Column({
		length: 300,
		type: 'varchar',
	})
	openQuestionProblemName: string;

	@Column({
		length: 500,
		type: 'varchar',
	})
	openQuestionProblemAnswer: string;

	@OneToOne(type => LocalizedText)
	openQuestionProblemText: LocalizedText;

	@ManyToOne(
		type => Coordinator,
		coordinator => coordinator.coordinatorSubmittedOpenQuestionProblems
	)
	submittedBy: Coordinator;
}

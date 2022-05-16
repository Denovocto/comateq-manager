import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Administrator } from './Administrator';
import { MultipleChoiceProblem } from './MultipleChoiceProblem';
import { OpenQuestionProblem } from './OpenQuestionProblem';

@Entity()
export class Test {
	@PrimaryGeneratedColumn('uuid')
	testId: string;

	@Column('date')
	createdAt: Date;

	@Column('date')
	updatedAt?: Date;

	@ManyToMany(type => MultipleChoiceProblem)
	@JoinTable()
	multipleChoiceProblems: MultipleChoiceProblem[];

	@ManyToMany(type => OpenQuestionProblem)
	@JoinTable()
	openQuestionProblems: OpenQuestionProblem[];

	@ManyToOne(
		type => Administrator,
		administrator => administrator.administratorCreatedTests
	)
	createdBy: Administrator;
}

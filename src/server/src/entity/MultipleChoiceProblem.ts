import {
	Column,
	Entity,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Coordinator } from './Coordinator';
import { LocalizedText } from './LocalizedText';
import { MultipleChoiceOption } from './MultipleChoiceOption';
import { Test } from './Test';

@Entity()
export class MultipleChoiceProblem {
	@PrimaryGeneratedColumn('uuid')
	multipleChoiceProblemId: string;

	@Column({
		length: 300,
		type: 'varchar',
	})
	multipleChoiceProblemName: string;

	@OneToOne(type => LocalizedText)
	@JoinColumn()
	multipleChoiceProblemText: LocalizedText;

	@OneToMany(
		type => MultipleChoiceOption,
		multipleChoiceOption => multipleChoiceOption.multipleChoiceProblem
	)
	multipleChoiceOptions: MultipleChoiceOption[];

	@OneToOne(type => MultipleChoiceOption)
	@JoinColumn()
	multipleChoiceProblemCorrectOption: MultipleChoiceOption;

	@ManyToOne(
		type => Coordinator,
		coordinator => coordinator.coordinatorSubmittedMultipleChoiceProblems
	)
	submittedBy: Coordinator;
}

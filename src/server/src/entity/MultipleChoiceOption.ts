import {
	Column,
	Entity,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { LocalizedText } from './LocalizedText';
import { MultipleChoiceProblem } from './MultipleChoiceProblem';

@Entity()
export class MultipleChoiceOption {
	@PrimaryGeneratedColumn('uuid')
	multipleChoiceOptionId: string;

	@Column({
		length: 100,
		type: 'varchar',
	})
	multipleChoiceOptionName: string;

	@OneToOne(type => LocalizedText)
	text: LocalizedText;

	@ManyToOne(
		type => MultipleChoiceProblem,
		multipleChoiceProblem => multipleChoiceProblem.multipleChoiceOptions
	)
	multipleChoiceProblem: MultipleChoiceProblem;
}

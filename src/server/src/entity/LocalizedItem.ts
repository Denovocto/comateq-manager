import {
	Entity,
	Column,
	OneToMany,
	PrimaryGeneratedColumn,
	ManyToOne,
} from 'typeorm';
import { LocalizedText } from './LocalizedText';

@Entity()
export class LocalizedItem {
	@PrimaryGeneratedColumn('uuid')
	localizedItemId: string;

	@Column({
		length: 100,
		type: 'varchar',
	})
	code: string;

	@Column({
		length: 500,
		type: 'varchar',
	})
	value: string;

	@ManyToOne(type => LocalizedText, localizedText => localizedText.text)
	localizedText: LocalizedText;
}

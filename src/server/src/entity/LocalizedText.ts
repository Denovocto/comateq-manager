import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LocalizedItem } from './LocalizedItem';
import { ParticipantGroupStatus } from './PaticipantGroupStatus';

@Entity()
export class LocalizedText {
	@PrimaryGeneratedColumn('uuid')
	localizedTextId: string;

	@Column({
		length: 100,
		type: 'varchar',
	})
	name: string;

	@Column({
		length: 100,
		type: 'varchar',
	})
	normalizedName: string;

	@OneToMany(
		type => LocalizedItem,
		localizedItem => localizedItem.localizedText
	)
	text: LocalizedItem[];
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Participant } from './Participant';

@Entity()
export class School {
	@PrimaryGeneratedColumn('uuid')
	schoolId: string;

	@Column({
		length: 100,
		type: 'varchar',
	})
	schoolName: string;

	@OneToMany(type => Participant, participant => participant.participantSchool)
	schoolParticipants?: Participant[];
}

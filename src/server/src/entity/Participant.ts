import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ParticipantGroup } from './ParticipantGroup';
import { School } from './School';
@Entity()
export class Participant {
	@PrimaryGeneratedColumn('uuid')
	participantId: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	participantFirstName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	participantMiddleName?: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	participantLastName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	participantSecondLastName?: string;

	@Column('datetime')
	participantDateOfBirth: Date;

	@Column()
	participantGrade: number;

	@ManyToOne(type => School, school => school.schoolParticipants)
	participantSchool: School;

	@ManyToOne(
		type => ParticipantGroup,
		participantGroup => participantGroup.participants
	)
	participantGroup?: ParticipantGroup;
}

import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	ManyToOne,
} from 'typeorm';
import { Coordinator } from './Coordinator';
import { Participant } from './Participant';
import { ParticipantGroupStatus } from './PaticipantGroupStatus';
@Entity()
export class ParticipantGroup {
	@PrimaryGeneratedColumn('uuid')
	participantGroupId: string;

	@Column({
		length: 100,
		type: 'varchar',
	})
	participantGroupName: string;

	@Column()
	punctuation?: number;

	@Column('date')
	participationDate: Date;

	@ManyToOne(
		type => ParticipantGroupStatus,
		participantGroupStatus => participantGroupStatus.participantGroup
	)
	participantGroupStatus: ParticipantGroupStatus;

	@ManyToOne(
		type => Coordinator,
		coordinator => coordinator.coordinatorOrganizedParticipantGroups
	)
	coordinator: Coordinator;

	@OneToMany(type => Participant, participant => participant.participantGroup)
	participants: Participant[];
}

import {
	Entity,
	PrimaryColumn,
	OneToMany,
	OneToOne,
	JoinColumn,
} from 'typeorm';
import { LocalizedText } from './LocalizedText';
import { ParticipantGroup } from './ParticipantGroup';
@Entity()
export class ParticipantGroupStatus {
	@PrimaryColumn({
		length: 100,
		type: 'varchar',
	})
	participantGroupStatus: string;

	@OneToOne(type => LocalizedText)
	@JoinColumn()
	localizedText: LocalizedText;

	@OneToMany(
		type => ParticipantGroup,
		participantGroup => participantGroup.participantGroupStatus
	)
	participantGroup: ParticipantGroup[];
}

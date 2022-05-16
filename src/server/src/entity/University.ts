import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	OneToOne,
} from 'typeorm';
import { Administrator } from './Administrator';
import { Coordinator } from './Coordinator';
@Entity()
export class University {
	@PrimaryGeneratedColumn('uuid')
	universityId: string;

	@Column({
		length: 100,
		type: 'varchar',
	})
	universityName: string;

	@OneToOne(
		type => Coordinator,
		coordinator => coordinator.coordinatorUniversity
	)
	coordinator: Coordinator;

	@OneToMany(
		type => Administrator,
		administrator => administrator.administratorUniversity
	)
	administrators: Administrator[];
}

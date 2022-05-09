import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Participant {
	@PrimaryGeneratedColumn()
	participantId: number;

	@Column({
		length: 50,
		type: 'varchar',
	})
	firstName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	secondName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	lastName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	secondLastName: string;

	@Column('date')
	dateOfBirth: Date;
}

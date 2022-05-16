import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Test } from './Test';
import { University } from './University';

@Entity()
export class Administrator {
	@PrimaryGeneratedColumn('uuid')
	administratorId: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	administratorFirstName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	administratorMiddleName?: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	administratorLastName: string;

	@Column({
		length: 50,
		type: 'varchar',
	})
	administratorSecondLastName?: string;

	@Column({
		length: 320,
		type: 'varchar',
	})
	administratorEmail: string;

	@Column({
		length: 150,
		type: 'varchar',
	})
	administratorInstitutionWorkTitle: string;

	@ManyToOne(type => University)
	administratorUniversity: University;

	@OneToMany(type => Test, test => test.createdBy)
	administratorCreatedTests: Test[];
}

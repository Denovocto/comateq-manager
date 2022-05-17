import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ParticipantForAdd } from 'src/app/models/ParticipantForAdd';
import { ParticipantsService } from '../participants-service';

@Component({
	selector: 'app-participants-add-success',
	templateUrl: './participants-add-success.component.pug',
})
export class ParticipantsAddSucessComponent {}
@Component({
	selector: 'app-participants-add',
	templateUrl: './participants-add.component.pug',
	styleUrls: ['./participants-add.component.sass'],
})
export class ParticipantsAddComponent implements OnInit {
	participantsAddForm = this.formBuilder.group({
		participantFirstName: [null],
		participantMiddleName: [null],
		participantLastName: [null],
		participantSecondLastName: [null],
		participantDateOfBirth: [null],
		participantGrade: [null],
	});

	participantsAddFormControls = {
		participantFirstName: this.participantsAddForm.get('participantFirstName'),
		participantMiddleName: this.participantsAddForm.get(
			'participantMiddleName'
		),
		participantLastName: this.participantsAddForm.get('participantLastName'),
		participantSecondLastName: this.participantsAddForm.get(
			'participantSecondLastName'
		),
		participantDateOfBirth: this.participantsAddForm.get(
			'participantDateOfBirth'
		),
		participantGrade: this.participantsAddForm.get('participantGrade'),
	};

	onAdd(): void {
		const participant: ParticipantForAdd =
			this.participantsAddForm.getRawValue();
		this.participantsService.addParticipant(participant).subscribe({
			next: () => {
				this.dialog.open(ParticipantsAddSucessComponent);
			},
		});
	}
	constructor(
		private dialog: MatDialog,
		private formBuilder: FormBuilder,
		private participantsService: ParticipantsService
	) {}

	ngOnInit(): void {}
}

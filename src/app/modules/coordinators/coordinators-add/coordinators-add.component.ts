import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CoordinatorForAdd } from 'src/app/models/CoordinatorForAdd';
import { CoordinatorsService } from '../coordinators-service';

@Component({
	selector: 'app-participants-add-success',
	templateUrl: './coordinators-add-success.component.pug',
})
export class CoordinatorsAddSuccessComponent {}

@Component({
	selector: 'app-coordinators-add',
	templateUrl: './coordinators-add.component.pug',
	styleUrls: ['./coordinators-add.component.sass'],
})
export class CoordinatorsAddComponent implements OnInit {
	coordinatorsAddForm = this.formBuilder.group({
		coordinatorFirstName: [null],
		coordinatorMiddleName: [null],
		coordinatorLastName: [null],
		coordinatorSecondLastName: [null],
		coordinatorEmail: [null],
		coordinatorHasDoneARegionalContest: [null],
		coordinatorRegionalContestName: [null],
		coordinatorRegionalContestURL: [null],
		coordinatorRegionalContestLogoURI: [null],
	});

	coordinatorsAddFormControls = {
		coordinatorFirstName: this.coordinatorsAddForm.get('coordinatorFirstName'),
		coordinatorMiddleName: this.coordinatorsAddForm.get(
			'coordinatorMiddleName'
		),
		coordinatorLastName: this.coordinatorsAddForm.get('coordinatorLastName'),
		coordinatorSecondLastName: this.coordinatorsAddForm.get(
			'coordinatorSecondLastName'
		),
		coordinatorEmail: this.coordinatorsAddForm.get('coordinatorEmail'),
		coordinatorHasDoneARegionalContest: this.coordinatorsAddForm.get(
			'coordinatorHasDoneARegionalContest'
		),
		coordinatorRegionalContestName: this.coordinatorsAddForm.get(
			'coordinatorRegionalContestName'
		),
		coordinatorRegionalContestURL: this.coordinatorsAddForm.get(
			'coordinatorRegionalContestURL'
		),
		coordinatorRegionalContestLogoURI: this.coordinatorsAddForm.get(
			'coordinatorRegionalContestLogoURI'
		),
	};

	onAdd(): void {
		const coordinator: CoordinatorForAdd =
			this.coordinatorsAddForm.getRawValue();
		this.coordinatorsService.addCoordinator(coordinator).subscribe({
			next: () => {
				this.dialog.open(CoordinatorsAddSuccessComponent);
			},
		});
	}

	constructor(
		private dialog: MatDialog,
		private formBuilder: FormBuilder,
		private coordinatorsService: CoordinatorsService
	) {}

	ngOnInit(): void {}
}

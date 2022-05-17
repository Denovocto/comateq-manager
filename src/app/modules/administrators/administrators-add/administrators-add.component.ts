import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdministratorForAdd } from 'src/app/models/AdministratorForAdd';
import { AdministratorsService } from '../administrators-service';

@Component({
	selector: 'app-administrators-add-success',
	templateUrl: './administrators-add-success.component.pug',
})
export class AdministratorsAddSuccessComponent {}

@Component({
	selector: 'app-administrators-add',
	templateUrl: './administrators-add.component.pug',
	styleUrls: ['./administrators-add.component.sass'],
})
export class AdministratorsAddComponent implements OnInit {
	administratorsAddForm = this.formBuilder.group({
		administratorFirstName: [null],
		administratorMiddleName: [null],
		administratorLastName: [null],
		administratorSecondLastName: [null],
		administratorEmail: [null],
		administratorInstitutionWorkTitle: [null],
	});

	administratorsAddFormControls = {
		administratorFirstName: this.administratorsAddForm.get(
			'administratorFirstName'
		),
		administratorMiddleName: this.administratorsAddForm.get(
			'administratorMiddleName'
		),
		administratorLastName: this.administratorsAddForm.get(
			'administratorLastName'
		),
		administratorSecondLastName: this.administratorsAddForm.get(
			'administratorSecondLastName'
		),
		administratorEmail: this.administratorsAddForm.get('administratorEmail'),
		administratorHasDoneARegionalContest: this.administratorsAddForm.get(
			'administratorHasDoneARegionalContest'
		),
		administratorRegionalContestName: this.administratorsAddForm.get(
			'administratorRegionalContestName'
		),
		administratorRegionalContestURL: this.administratorsAddForm.get(
			'administratorRegionalContestURL'
		),
		administratorRegionalContestLogoURI: this.administratorsAddForm.get(
			'administratorRegionalContestLogoURI'
		),
	};

	onAdd(): void {
		const administrator: AdministratorForAdd =
			this.administratorsAddForm.getRawValue();
		this.administratorsService.addAdministrator(administrator).subscribe({
			next: () => {
				this.dialog.open(AdministratorsAddSuccessComponent);
			},
		});
	}
	constructor(
		private dialog: MatDialog,
		private formBuilder: FormBuilder,
		private administratorsService: AdministratorsService
	) {}

	ngOnInit(): void {}
}

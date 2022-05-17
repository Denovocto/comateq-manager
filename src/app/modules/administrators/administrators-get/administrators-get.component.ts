import { Component, OnInit } from '@angular/core';
import { AdministratorForAdd } from 'src/app/models/AdministratorForAdd';
import { AdministratorsService } from '../administrators-service';

@Component({
	selector: 'app-administrators-get',
	templateUrl: './administrators-get.component.pug',
	styleUrls: ['./administrators-get.component.sass'],
})
export class AdministratorsGetComponent implements OnInit {
	administrators: AdministratorForAdd[];
	constructor(private administratorsService: AdministratorsService) {}

	ngOnInit(): void {
		this.administratorsService.getAdministrators().subscribe({
			next: administrators => {
				this.administrators = administrators;
			},
		});
	}
}

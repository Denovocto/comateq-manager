import { Component, OnInit } from '@angular/core';
import { CoordinatorForAdd } from 'src/app/models/CoordinatorForAdd';
import { CoordinatorsService } from '../coordinators-service';

@Component({
	selector: 'app-coordinators-get',
	templateUrl: './coordinators-get.component.pug',
	styleUrls: ['./coordinators-get.component.sass'],
})
export class CoordinatorsGetComponent implements OnInit {
	coordinators: CoordinatorForAdd[];
	constructor(private coordinatorsService: CoordinatorsService) {}

	ngOnInit(): void {
		this.coordinatorsService.getCoordinators().subscribe({
			next: coordinators => {
				this.coordinators = coordinators;
			},
		});
	}
}

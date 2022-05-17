import { Component, OnInit } from '@angular/core';
import { ParticipantForAdd } from 'src/app/models/ParticipantForAdd';
import { ParticipantsService } from '../participants-service';

@Component({
	selector: 'app-participants-get',
	templateUrl: './participants-get.component.pug',
	styleUrls: ['./participants-get.component.sass'],
})
export class ParticipantsGetComponent implements OnInit {
	participants: ParticipantForAdd[];
	constructor(private participantsService: ParticipantsService) {}
	ngOnInit(): void {
		this.participantsService.getParticipants().subscribe({
			next: participants => {
				this.participants = participants;
			},
		});
	}
}

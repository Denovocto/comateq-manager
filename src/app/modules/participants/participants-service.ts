import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantForAdd } from '../../models/ParticipantForAdd';

const apiURL = 'http://localhost:8080';

const routes = {
	participantsAdd: () => `${apiURL}/participant`,
	participantsSpecific: (participantId?: string) =>
		`${apiURL}/participant/${participantId}`,
};

@Injectable({
	providedIn: 'root',
})
export class ParticipantsService {
	constructor(private http: HttpClient) {}
	addParticipant(participant: ParticipantForAdd): Observable<void> {
		debugger;
		return this.http.post<void>(routes.participantsAdd(), participant);
	}
}

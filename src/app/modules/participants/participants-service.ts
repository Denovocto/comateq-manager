import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantForAdd } from '../../models/ParticipantForAdd';

const apiURL = 'http://localhost:8080';

const routes = {
	participantsAdd: () => `${apiURL}/participant`,
	participantsSpecific: (participantId?: string) =>
		`${apiURL}/participant/${participantId}`,
	participantGet: () => `${apiURL}/participant`,
};

@Injectable({
	providedIn: 'root',
})
export class ParticipantsService {
	constructor(private http: HttpClient) {}
	addParticipant(participant: ParticipantForAdd): Observable<void> {
		return this.http.post<void>(routes.participantsAdd(), participant);
	}
	getParticipants(): Observable<ParticipantForAdd[]> {
		return this.http.get<ParticipantForAdd[]>(routes.participantGet());
	}
}

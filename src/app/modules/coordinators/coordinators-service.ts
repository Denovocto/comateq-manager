import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoordinatorForAdd } from 'src/app/models/CoordinatorForAdd';

const apiURL = 'http://localhost:8080';

const routes = {
	coordinatorsAdd: () => `${apiURL}/coordinator`,
	coordinatorsSpecific: (coordinatorId?: string) =>
		`${apiURL}/coordinator/${coordinatorId}`,
	coordinatorGet: () => `${apiURL}/coordinator`,
};

@Injectable({
	providedIn: 'root',
})
export class CoordinatorsService {
	constructor(private http: HttpClient) {}
	addCoordinator(coordinator: CoordinatorForAdd): Observable<void> {
		return this.http.post<void>(routes.coordinatorsAdd(), coordinator);
	}
	getCoordinators(): Observable<CoordinatorForAdd[]> {
		return this.http.get<CoordinatorForAdd[]>(routes.coordinatorGet());
	}
}

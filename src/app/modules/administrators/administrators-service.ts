import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministratorForAdd } from 'src/app/models/AdministratorForAdd';

const apiURL = 'http://localhost:8080';

const routes = {
	administratorsAdd: () => `${apiURL}/administrator`,
	administratorsSpecific: (administratorId?: string) =>
		`${apiURL}/administrator/${administratorId}`,
	administratorGet: () => `${apiURL}/administrator`,
};

@Injectable({
	providedIn: 'root',
})
export class AdministratorsService {
	constructor(private http: HttpClient) {}
	addAdministrator(administrator: AdministratorForAdd): Observable<void> {
		return this.http.post<void>(routes.administratorsAdd(), administrator);
	}
	getAdministrators(): Observable<AdministratorForAdd[]> {
		return this.http.get<AdministratorForAdd[]>(routes.administratorGet());
	}
}

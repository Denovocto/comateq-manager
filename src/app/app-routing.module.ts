import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorsAddComponent } from './modules/administrators/administrators-add/administrators-add.component';
import { AdministratorsGetComponent } from './modules/administrators/administrators-get/administrators-get.component';
import { AdministratorsMainComponent } from './modules/administrators/administrators-main/administrators-main.component';
import { CoordinatorsAddComponent } from './modules/coordinators/coordinators-add/coordinators-add.component';
import { CoordinatorsGetComponent } from './modules/coordinators/coordinators-get/coordinators-get.component';
import { CoordinatorsMainComponent } from './modules/coordinators/coordinators-main/coordinators-main.component';
import { ParticipantsAddComponent } from './modules/participants/participants-add/participants-add.component';
import { ParticipantsGetComponent } from './modules/participants/participants-get/participants-get.component';
import { ParticipantsMainComponent } from './modules/participants/participants-main/participants-main.component';

const routes: Routes = [
	{ path: 'participants/add', component: ParticipantsAddComponent },
	{ path: 'participants/list', component: ParticipantsGetComponent },
	{ path: 'participants', component: ParticipantsMainComponent },
	{ path: 'coordinators/add', component: CoordinatorsAddComponent },
	{ path: 'coordinators/list', component: CoordinatorsGetComponent },
	{ path: 'coordinators', component: CoordinatorsMainComponent },
	{ path: 'administrators/add', component: AdministratorsAddComponent },
	{ path: 'administrators/list', component: AdministratorsGetComponent },
	{ path: 'administrators', component: AdministratorsMainComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

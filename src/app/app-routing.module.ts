import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantsAddComponent } from './modules/participants/participants-add/participants-add.component';
import { ParticipantsGetComponent } from './modules/participants/participants-get/participants-get.component';
import { ParticipantsMainComponent } from './modules/participants/participants-main/participants-main.component';

const routes: Routes = [
	{ path: 'participants/add', component: ParticipantsAddComponent },
	{ path: 'participants/list', component: ParticipantsGetComponent },
	{ path: 'participants', component: ParticipantsMainComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import {
	ParticipantsAddComponent,
	ParticipantsAddSucessComponent,
} from './participants-add/participants-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ParticipantsGetComponent } from './participants-get/participants-get.component';
import { ParticipantsMainComponent } from './participants-main/participants-main.component';

@NgModule({
	declarations: [
		ParticipantsAddComponent,
		ParticipantsAddSucessComponent,
		ParticipantsGetComponent,
		ParticipantsMainComponent,
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDatepickerModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatTabsModule,
	],
	exports: [
		ParticipantsAddComponent,
		ParticipantsGetComponent,
		ParticipantsMainComponent,
	],
})
export class ParticipantsModule {}

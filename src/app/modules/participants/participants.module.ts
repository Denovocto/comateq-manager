import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ParticipantsAddComponent } from './participants-add/participants-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ParticipantsAddComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDatepickerModule,
		ReactiveFormsModule,
	],
	exports: [ParticipantsAddComponent],
})
export class ParticipantsModule {}

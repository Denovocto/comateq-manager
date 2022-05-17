import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {
	CoordinatorsAddComponent,
	CoordinatorsAddSuccessComponent,
} from './coordinators-add/coordinators-add.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CoordinatorsGetComponent } from './coordinators-get/coordinators-get.component';
import { CoordinatorsMainComponent } from './coordinators-main/coordinators-main.component';

@NgModule({
	declarations: [
		CoordinatorsAddComponent,
		CoordinatorsAddSuccessComponent,
		CoordinatorsGetComponent,
		CoordinatorsMainComponent,
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDatepickerModule,
		MatTabsModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatCheckboxModule,
		FormsModule,
	],
	exports: [
		CoordinatorsAddComponent,
		CoordinatorsGetComponent,
		CoordinatorsMainComponent,
	],
})
export class CoordinatorsModule {}

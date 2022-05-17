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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {
	AdministratorsAddComponent,
	AdministratorsAddSuccessComponent,
} from './administrators-add/administrators-add.component';
import { AdministratorsGetComponent } from './administrators-get/administrators-get.component';
import { AdministratorsMainComponent } from './administrators-main/administrators-main.component';

@NgModule({
	declarations: [
		AdministratorsAddComponent,
		AdministratorsAddSuccessComponent,
		AdministratorsGetComponent,
		AdministratorsMainComponent,
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
		AdministratorsAddComponent,
		AdministratorsGetComponent,
		AdministratorsMainComponent,
	],
})
export class AdministratorsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
	],
	exports: [LoginComponent],
})
export class AuthModule {}

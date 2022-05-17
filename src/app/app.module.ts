import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarModule } from './modules/top-bar/top-bar.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticipantsAddComponent } from './participants/participants-add/participants-add.component';
import { ParticipantsModule } from './participants/participants.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TopBarModule,
		ParticipantsModule,
		MatNativeDateModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

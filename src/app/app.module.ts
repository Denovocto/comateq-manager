import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarModule } from './modules/top-bar/top-bar.module';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, TopBarModule, AuthModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

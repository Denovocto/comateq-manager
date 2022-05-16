import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TopBarMainComponent } from './top-bar-main/top-bar-main.component';

@NgModule({
	declarations: [TopBarMainComponent],
	imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
	exports: [TopBarMainComponent],
})
export class TopBarModule {}

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {
	toggle = false;
	title = 'comateq-manager';

	onToggleMenu(value: boolean) {
		this.toggle = value;
	}
}

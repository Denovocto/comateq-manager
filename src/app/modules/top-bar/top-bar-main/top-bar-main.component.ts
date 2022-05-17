import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-top-bar-main',
	templateUrl: './top-bar-main.component.pug',
	styleUrls: ['./top-bar-main.component.sass'],
})
export class TopBarMainComponent implements OnInit {
	toggle = false;
	@Output() toggleValue = new EventEmitter<boolean>();
	constructor() {}

	ngOnInit(): void {}

	onClickMenu() {
		this.toggle = !this.toggle;
		this.toggleValue.emit(this.toggle);
	}
}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	// Show Password - default false
	show: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	// click event function toggle
	password() {
		this.show = !this.show;
	}
}

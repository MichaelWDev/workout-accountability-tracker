import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { DataService } from 'src/services/data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	// Show Password - default false
	show: boolean = false;
	users: any;
	errorMsg!: string;

	constructor(private dataService: DataService) { }

	ngOnInit(): void {
	}

	// click event function toggle
	password() {
		this.show = !this.show;
	}

	// You will use the UUID as an index to get the user's information.

	// Register
	// TODO: Figure out how to get every value from the register HTML when entered.
	registerUserForm(registerUser: any) {
		console.log(`UUID: ${uuidv4()}`)
		console.log(
			[registerUser.value.username,
			registerUser.value.firstName,
			registerUser.value.lastName,
			registerUser.value.email,
			registerUser.value.password]
			)
		this.dataService.createNewUser(
			uuidv4(),
			[registerUser.value.username,
			registerUser.value.firstName,
			registerUser.value.lastName,
			registerUser.value.email,
			registerUser.value.password]
			).subscribe({
					
			next: (data) => {
				this.users = data;
				console.log(this.users);

				this.dataService.getUsers().subscribe({
					next: (data: any) => this.users = data,
					error: (error) => this.errorMsg = error
				})
			},
			error: (error) => {
				this.errorMsg = error
				alert("Someone already has the same ID.");
			}
		});
	}
}
// "id": 2,
// "Username": "admin",
// "FirstName": "admin",
// "LastName": "admin",
// "Email": "admin@admin.com",
// "Password": "123"
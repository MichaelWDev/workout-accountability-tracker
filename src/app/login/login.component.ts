import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { DataService } from 'src/services/data.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	// Show Password - default false
	show: boolean = false;
	invalidCredentialMsg: string | undefined;
	email: string | undefined;
	password: string | undefined;
	retUrl: string | null = 'dashboard';

	// constructor(private Auth: AuthService, private router:Router) { }
	constructor(private dataService: DataService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
	}

	// click event function toggle
	showPassword() {
		this.show = !this.show;
	}

	// TODO: Work on login method.
	// This was taken from the other AngularProject.
	loginUser(loginForm: any) {
		this.authService.login(loginForm.value.email, loginForm.value.password).subscribe(data => {
			console.log('return to ' + this.retUrl)
			console.log(this.retUrl)
			if (this.retUrl != null) {
				this.router.navigate([this.retUrl]);
			} else {
				this.router.navigate(['home']);
			}
		});
	}

	// Login
	// loginUser(event:any) {
	// 	this.router.navigate(['dashboard']);

	// 	TODO - Login
	// 	event.preventDefault();
	// 	const target = event.target; // html form
	// 	const username = target.querySelector('#inputEmail').value;
	// 	const password = target.querySelector('#inputPassword').value;

	// 	console.log(username, password);

	// 	this.authService.getUserDetails(username, password).subscribe((data: { success: any; message: any; }) => {
	// 		if (data.success) {
	// 			Redirect the person to /admin

	// 			Redirect to dashboard if user is logged in.
	// 			this.router.navigate(['dashboard']);
	// 			this.authService.setLoggedIn(true);
	// 		} else {
	// 			window.alert(data.message);
	// 		}
	// 	});
	// }
}

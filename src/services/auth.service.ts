// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { of } from "rxjs";

interface myData {
	success: boolean,
	message: string
}

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	private isLoggedIn: boolean;
	public username: string | undefined;
	api:string= "http://localhost:4000/users/"

	constructor(public jwtHelper: JwtHelperService, private httpClient: HttpClient) {
		this.isLoggedIn = false;
	}

	public isAuthenticated(): boolean {
		const token = localStorage.getItem('token');
		// Check whether the token is expired and return
		// true or false
		return !this.jwtHelper.isTokenExpired(token);
	}

	setLoggedIn(value: boolean) {
		this.isLoggedIn = value;
	}

	get loggedInStatus() {
		return this.isLoggedIn;
	}

	// Get User Details
	getUserDetails(email: any, password: any):Observable<any> {
		// Post these details to API server and return user info if correct.
		console.log(`getUserDetails`)
		return this.httpClient.get(this.api + email);
	}

	// Login
	login(username: any, password: any) {
		this.isLoggedIn = true;
		this.username = username;
		return of(this.isLoggedIn);
	}

	// Is User Logged In
	isUserLoggedIn(): boolean {
		return this.isLoggedIn;
	}

	// Is User Admin
	isAdminUser(): boolean {
		if(this.username == 'Admin') {
			return true;
		} // else
		return false
	}

	// Logout
	logoutUser(): void {
		this.isLoggedIn = false;
	}
}
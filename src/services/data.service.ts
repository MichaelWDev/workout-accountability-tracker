import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class DataService {

	url:string= "http://localhost:4000/"

	constructor(private httpClient: HttpClient) { }

	// READ ALL
	getUsers():Observable<any>{
		//http://localhost:4000/employee
		return this.httpClient.get(this.url + 'users');
	}

	// READ ONE
	getUser(id: any):Observable<any>{
		return this.httpClient.get(this.url + 'users/' + id);
	}

	// CREATE
	createNewUser(id: string, data: any){
		console.log("TEST")
		return this.httpClient.post(this.url + 'users/', id, data.value);
	}
}
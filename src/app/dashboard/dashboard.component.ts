import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	// public changePage:boolean = false;
	// public pageName:any = "";
	public showPage:any = "";

	constructor(public authService: AuthService) {}

	ngOnInit () {}

	// toggle() {
	// 	this.show = !this.show;

	// 	// Change the name of the button.
	// 	if(this.show)  
	// 		this.buttonName = "Hide";
	// 	else
	// 		this.buttonName = "Show";
	// }

	toggle(pageName:string) {
		console.log(pageName)
		// if (pageName == "Home") {
		// 	this.showPage = "Home";
		// }
		switch (pageName) {
			case "Home":
				this.showPage = "Home";
			break;

			case "Dashboard":
				this.showPage = "Dashboard";
			break;
		}
	}
}

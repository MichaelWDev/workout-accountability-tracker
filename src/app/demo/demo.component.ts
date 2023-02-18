import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-demo',
	templateUrl: './demo.component.html',
	styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
	// public changePage:boolean = false;
	// public pageName:any = "";
	public showPage:any = "";

	ngOnInit () {  }

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

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SECTION: Pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// SECTION: Demo
import { DemoComponent } from './demo/demo.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';

// SECTION: Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardDashboardComponent } from './dashboard-dashboard/dashboard-dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

// SECTION: Login / Register
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// SECTION: Page Not Found
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// SECTION: Services
import { AuthGuard } from './auth.guard';

// import { AuthGuardService } from 'src/services/auth-guard.service';
// import { RouteguardGuard } from './services/routeguard.guard';

const routes: Routes = [
	// ANCHOR: Pages Routing
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },

	// ANCHOR: Demo Routing
	{
		path: 'demo',
		component: DemoComponent,
		children: [
			{
				path: 'demo-home',
				component: DemoHomeComponent,
				outlet: 'demo-display'
			},
			{
				path: 'demo-dashboard',
				component: DemoDashboardComponent,
				outlet: 'demo-display'
			}
		]
	},

	// ANCHOR: Dashoard Routing
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard-home',
				component: DashboardHomeComponent,
				outlet: 'demo-display'
			},
			{
				path: 'dashboard-dashboard',
				component: DashboardDashboardComponent,
				outlet: 'demo-display'
			}
		]
	},
	
	// ANCHOR: Login / Register Routing
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to the home component if path is empty
	{ path: '**', component: PageNotFoundComponent } // wildcard route

	// { path: 'addNewEmployee', component: AddEmployeeComponent, canActivate: [RouteguardGuard], canActivateChild: [RouteguardGuard] },
	// { path: 'editEmployee/:id', component: EditEmployeeComponent, canActivate: [RouteguardGuard] },
	// { path: 'employee', component: EmployeeListComponent, children: [{ path: 'view/:id', component: EmployeeDetailsComponent }], canActivate: [RouteguardGuard], canActivateChild: [RouteguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

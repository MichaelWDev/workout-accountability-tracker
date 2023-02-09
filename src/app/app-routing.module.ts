import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { RouteguardGuard } from './services/routeguard.guard';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: LoginComponent },
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

// SECTION: Pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// SECTION Login / Register
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// SECTION: Demo
import { DemoComponent } from './demo/demo.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';

// SECTION: Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';

// SECTION: Page Not Found
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardDashboardComponent } from './dashboard-dashboard/dashboard-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    DemoComponent,
    AboutComponent,
    DashboardComponent,
    DemoHomeComponent,
    DemoDashboardComponent,
    DashboardHomeComponent,
    DashboardDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

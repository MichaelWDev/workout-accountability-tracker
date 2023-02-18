import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    DemoDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

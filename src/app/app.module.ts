import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages 
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';

// shared components
import { NavComponent } from './shared/nav/nav.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },  
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

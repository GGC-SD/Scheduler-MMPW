import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ModeratorComponent } from './components/pages/moderator/moderator.component';
import { PreferencesComponent } from './components/pages/preferences/preferences.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './services/services.component';
// import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModeratorComponent,
    PreferencesComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ServicesComponent,
    // DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { PreferencesComponent } from './components/pages/preferences/preferences.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './services/services.component';
// import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
@@ -18,7 +21,10 @@ import { FooterComponent } from './components/layout/footer/footer.component';
    ModeratorComponent,
    PreferencesComponent,
    NavbarComponent,
    FooterComponent
    FooterComponent,
    LoginComponent,
    ServicesComponent,
    // DirectivesComponent
  ],
  imports: [
    BrowserModule,

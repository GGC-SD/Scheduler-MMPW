import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferencesComponent } from './components/pages/preferences/preferences.component';

const routes: Routes = [
  { path: 'preferences', component: PreferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
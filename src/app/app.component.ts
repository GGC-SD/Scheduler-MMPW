import { Component } from '@angular/core';

@Component({
  // selector: "app-root",
  // template: `
  // <!-- header -->
  // <app-header></app-header>

  // <!-- routes that will be rendered -->
  // <router-outlet></router-outlet>

  // <!-- footer -->
  // <app-footer></app-footer>
  // `,
  // styles: []
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faculty-scheduler';
}

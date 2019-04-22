import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-header',
  // template: `
  // <nav>
  //   <div class=""navbar-menu">
  //     <div class="navbar-start">
  //       <a class="nav-item" routerLink="">Profile</a>
  //       <a class="nav-item" routerLink="">Schedule</a>
  //       <a class="nav-item" routerLink="">Logout</a>
  //     </div>
  //   </div>
  // </nav>
  // `,
  // styles: []

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

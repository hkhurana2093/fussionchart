import {Component} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    dataSource: Object;

    navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


    
    constructor() {        
    } 
    ngOnInit(){                       
    }

    
  }
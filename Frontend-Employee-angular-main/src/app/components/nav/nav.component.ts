import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  activeMenu:boolean = false;
  counter = 0;

  constructor(
  ) { }


  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}

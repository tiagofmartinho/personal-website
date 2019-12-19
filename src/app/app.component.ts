import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'Tiago Martinho';
  occupation = 'Software Engineer';
  navBarLinks: string[] = [
    'About', 'Skills', 'Resume', 'Contact'
  ];
  activeNavLinkId = '';


  setActive(id) {
    // if a new nav bar link was clicked, disable the old one and set the new one
    if (id !== this.activeNavLinkId) {
      if (this.activeNavLinkId !== '') {
        document.getElementById(this.activeNavLinkId).className = 'nav-link';
      }
      if (id !== '') {
        document.getElementById(id).className = 'nav-link active';
      }
      this.activeNavLinkId = id;
    }
  }

}

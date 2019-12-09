import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  name = 'Tiago Martinho';
  occupation = 'Software Engineer';
  lis: string[] = [
    'About', 'Skills', 'Resume', 'Contact'
  ];
}

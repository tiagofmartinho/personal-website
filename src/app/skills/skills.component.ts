import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  skills: string[] = ['Java', 'Spring', 'MicroProfile', 'Angular', 'Docker', 'SQL']

  constructor() { }

  ngOnInit(): void {
  }

}

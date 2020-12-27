import { Component, OnInit } from '@angular/core';
import { cgiDesc, ctwDesc } from '../descriptions.component';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {

  cgi = new Job("../assets/cgi.png", "Consultant", "CGI", "06/2017", "12/2020", cgiDesc)
  ctw = new Job("../assets/ctw.png", "Rockstart Developer", "Critical TechWorks", "12/2020", "Present",
  ctwDesc)
  jobs: Job[] = [this.ctw, this.cgi]
  constructor() { }

  ngOnInit(): void {
  }

}

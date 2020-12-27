import { Component, OnInit } from '@angular/core';
import { msc, bsc } from '../descriptions.component';
import { Degree } from '../models/degree.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {

  master = new Degree("../assets/iscte.jpg", "ISCTE - University Institute of Lisbon", "Master of Science (MSc), Computer Engineering",
  "09/2018", "Present", msc);
  bachelor = new Degree("../assets/iscte.jpg", "ISCTE - University Institute of Lisbon", "Bachelor of Science (BSc), Computer Engineering",
    "09/2014", "06/2017", bsc);
  
  degrees: Degree[] = [this.master, this.bachelor];
  
  constructor() { }

  ngOnInit(): void {
  }

}

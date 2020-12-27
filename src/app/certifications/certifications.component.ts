import { Component, OnInit } from '@angular/core';
import { Certification } from '../models/certification.model';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html'
})
export class CertificationsComponent implements OnInit {

  oraclePro = new Certification("../assets/oracle.png", "https://www.youracclaim.com/badges/e635bd9f-7e0e-4f65-8b7b-1ac465760325/linked_in_profile",
  "Oracle Certified Professional: Java SE 11 Developer", "Oracle", "July 2020");
  oracleAssociate = new Certification("../assets/oracle.png", "https://www.youracclaim.com/badges/8c3f4a7e-379e-434b-abe6-6707cb342c24/linked_in_profile",
  "Oracle Certified Associate: Java SE 8 Programmer", "Oracle", "May 2019");
  certifications: Certification[] = [this.oraclePro, this.oracleAssociate];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = "Tiago Martinho";
  navBarLinks: string[] = ["About", "Skills", "Resume", "Contact"];
  activeNavLinkId = "";

  setActive(id) {
    // if a new nav bar link is clicked, disable the old one and set the new one
    if (id !== this.activeNavLinkId) {
      if (this.activeNavLinkId !== "") {
        document.getElementById(this.activeNavLinkId).className = "nav-link";
      }
      if (id !== "") {
        document.getElementById(id).className = "nav-link active";
      }
      this.activeNavLinkId = id;
    }
  }
}

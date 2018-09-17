import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  leftBttn: string = "Home";
  rightBttn1: string = "Sign up";//1 being right most, #n going to the left
  rightBttn2: string = "Log in";

  constructor() { }

  ngOnInit() {
  }

  navigate(toPage: string) {
    switch (toPage) {
      case this.leftBttn:
        break;
      case this.rightBttn1:
        break;
      case this.rightBttn2:
        break;
    }
  }
}

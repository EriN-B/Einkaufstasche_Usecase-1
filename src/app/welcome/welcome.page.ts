import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  login() {
    console.log("Linked to Login")
  }
  register(){
    console.log("Linked to Register")
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  
})
export class CalendarPage implements OnInit {

  contactForm: FormGroup; 

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
    });
  }


}

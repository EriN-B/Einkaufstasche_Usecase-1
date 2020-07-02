import firebaseConfig from '../firebase'
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = ""
  password: string = ""
  cpassword: string = ""
  link: string = ""
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  Register(){
    const { email, password, cpassword,link } = this
    if (password!=cpassword) {
      return console.error("Password dont match")
   }
   this.afAuth.createUserWithEmailAndPassword(email, password);

  }

}

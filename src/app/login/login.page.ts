import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string="qweqwe";
  password: string="qeqwe";

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }


  async Login(){
    const {email,password} = this
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      console.log("Logged IN")
    }catch (err){
      console.dir(err)
      if(err.code==="auth/user-not-found"){
        console.log("User not found")
      }
    }
      
  }
 
}


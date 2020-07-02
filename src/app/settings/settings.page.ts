import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {AngularFireDatabase } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public url: String = "https://www.witteler.com/wp-content/uploads/2019/07/blank-profile-picture-973460.png";

  constructor(public alertController: AlertController,private afAuth: AngularFireAuth, private afDatabase : AngularFireDatabase) {}

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'url',
          type: 'text',
          placeholder: 'Placeholder 1'
        }
      ],
      buttons: [
         {
          text: 'Ok',
          handler: (value) => {
            console.log('Confirm Ok');
            console.log(value.url);
            if(value.url!=""|| value.url!=" "){
              this.url= value.url;
            }else{
              this.url="https://www.witteler.com/wp-content/uploads/2019/07/blank-profile-picture-973460.png";
            }
            
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}

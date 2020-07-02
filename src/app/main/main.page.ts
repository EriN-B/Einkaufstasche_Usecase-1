import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  Produkt: any = [];
  Produkt_Menge: any = [];

  delete(i){
    console.log("item Deleted");
    this.Produkt.splice(i,1)
  }



  constructor(public alertController: AlertController) {
  }



  async presentAlertMultipleButtons(item1,item2) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item1,
      subHeader:item2+' Stück',
      buttons: ['Cancel']
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Neues Produkt!',
      inputs: [
        {
          name: 'produkt',
          type: 'text',
          value: '',
          placeholder: 'Produkt'
        },
        {
          name: 'Menge',
          type: 'text',
          value: '',
          placeholder: 'Menge'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            if(data.produkt!=''){
              this.Produkt.push(data.produkt);
              this.Produkt_Menge.push(data.Menge);
            }else{
              console.log('Kein Produkt eingetragen')
            }
            
          }
        }
      ]
    });

    await alert.present();
    let Result = await alert.onDidDismiss();
    console.log(Result);
  }
 

  ngOnInit() {
  }

}

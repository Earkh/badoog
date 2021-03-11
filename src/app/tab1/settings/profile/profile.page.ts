import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: '¿Estás seguro?',
            message: 'Esta acción es irreversible',
            buttons: [
            {
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                console.log('Confirm Cancel: blah');
                }
            }, {
                text: 'Eliminar',
                handler: () => {
                console.log('Confirm Okay');
                }
            }
            ]
        });

        await alert.present();
    }
}

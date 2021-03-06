import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class UiServiceService {

    constructor(public alertController: AlertController,
        public toastController: ToastController) { }

    async presentAlert(message: string) {
        const alert = await this.alertController.create({
            message,
            buttons: ['OK']
        });

        await alert.present();
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 1500
        });
        toast.present();
    }
}

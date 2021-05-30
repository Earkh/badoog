import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
    providedIn: 'root'
})
export class PushService {

    constructor(private oneSignal: OneSignal) { }

    initialSetup() {
        this.oneSignal.startInit('3148ddb2-6c47-4f9e-9aa7-44a2e9cc8ed2', '927345674578');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe((notification) => {
            // do something when notification is received
            console.log('Notificacion recibida ', notification)
        });

        this.oneSignal.handleNotificationOpened().subscribe((notification) => {
            // do something when a notification is opened
            console.log('Notificacion abierta ', notification)
        });

        this.oneSignal.endInit();
    }
}

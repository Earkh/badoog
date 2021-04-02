import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { UiServiceService } from 'src/app/services/ui-service.service'
import { User } from 'src/app/interfaces/interfaces';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx'

declare var window: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage {

    @ViewChild('slide') slides: IonSlides;

    loginUser = {
        email: 'airam.dev@gmail.com',
        password: '123456'
    };

    registerData: User = {
        name: "Lilu",
        email: "Fizsprocket",
        password: "123456",
        age: 4,
        size: "mediano",
        sex: "hembra",
        desc: "Natural and quirky. Warm and fluffy."
    }

    constructor(
        private userService: UsersService,
        private navController: NavController,
        private UiService: UiServiceService,
        private camera: Camera
    ) { }

    ngAfterViewInit() {
        this.slides.lockSwipes(true);
    }

    async login(fLogin: NgForm) {
        if (fLogin.invalid) { return }

        const validUser = await this.userService.login(this.loginUser.email, this.loginUser.password);
        if (validUser) {
            this.navController.navigateRoot('/main/tabs/tab2', { animated: true })
        } else {
            this.UiService.presentAlert('Contraseña incorrecta');
        }
    }

    async register(fRegister: NgForm) {

        if (fRegister.invalid) { return }

        const valido = await this.userService.register(this.registerData);

        if (valido) {
            this.navController.navigateRoot('/main/tabs/tab1', { animated: true })
        } else {
            this.UiService.presentAlert('Ya existe un usuario con ese correo');
        }

        console.log(this.registerData)
        console.log(fRegister.valid)
    }

    showRegister() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }


    showLogin() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }

    camara() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):

            const img = window.Ionic.WebView.convertFileSrc(imageData);
            console.log(img)

        }, (err) => {
            // Handle error
        });
    }

}

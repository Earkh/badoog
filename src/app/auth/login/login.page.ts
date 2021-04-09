import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { UiServiceService } from 'src/app/services/ui-service.service'
import { User } from 'src/app/interfaces/interfaces';



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
        name: "",
        email: "",
        password: "",
        age: null,
        size: "",
        sex: "",
        desc: ""
    }

    constructor(
        private userService: UsersService,
        private navController: NavController,
        private UiService: UiServiceService
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
            this.navController.navigateRoot('/main/tabs/tab1/profile', { animated: true })
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

}

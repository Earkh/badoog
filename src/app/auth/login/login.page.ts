import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from '../auth.service';

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

    constructor(private userService: UsersService) { }

    ngAfterViewInit() {
        this.slides.lockSwipes(true);
    }

    login(fLogin: NgForm) {
        console.log(fLogin.valid);
        console.log(this.loginUser);
    }

    register(fRegister: NgForm) {
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

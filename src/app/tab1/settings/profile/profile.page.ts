import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular'
import { User } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    constructor(public alertController: AlertController,
        private userService: UsersService,
        private UiService: UiServiceService) { }

    user: User = {};

    checkSex: boolean;


    ngOnInit() {

        this.user = this.userService.getUser();
        console.log(this.user)
        if (this.user.sex == "hembra") {
            this.checkSex = true;
        } else {
            this.checkSex = false;
        }

    }

    logout() {

    }

    async update(fUpdate: NgForm) {

        if (fUpdate.invalid) return;

        const update = await this.userService.update(this.user);
        if (update) {
            this.UiService.presentToast('Perfil actualizado');
        } else {
            this.UiService.presentToast('No se pudo actualizar');
        }
    }

}

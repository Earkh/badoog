import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular'
import { User } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsersService } from 'src/app/services/users.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    constructor(public alertController: AlertController,
        private userService: UsersService,
        private UiService: UiServiceService,
        private camera: Camera) { }

    user: User = {};

    imagenTemp: any

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

        this.userService.logout();
    }

    camara() {
        const options: CameraOptions = {
            quality: 60,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        }

        this.camera.getPicture(options).then((data) => {
            const image = 'data:image/jpg;base64,' + data;
            this.imagenTemp = image;
            this.userService.imageUpload(image)
        }, (err) => console.log(err));

    }

    library() {
        const options: CameraOptions = {
            quality: 60,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }

        this.camera.getPicture(options).then((data) => {
            const image = 'data:image/jpg;base64,' + data;
            this.imagenTemp = image;
            this.userService.imageUpload(image);
        }, (err) => console.log(err));

    }



    async update(fUpdate: NgForm) {

        if (fUpdate.invalid) return;
        if (this.checkSex) {
            this.user.sex = "hembra";
        } else {
            this.user.sex = "macho";
        }

        const update = await this.userService.update(this.user);
        if (update) {
            this.UiService.presentToast('Perfil actualizado');
        } else {
            this.UiService.presentToast('No se pudo actualizar');
        }
    }

}

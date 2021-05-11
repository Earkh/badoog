import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { SliceService } from 'src/app/services/slice.service';
import { ModalPage } from '../modal/modal.page'
import { environment } from '../../../environments/environment';
import { UsersService } from 'src/app/services/users.service';

const URL = environment.URL

@Component({
    selector: 'app-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.scss'],
})
export class DogComponent implements OnInit {

    @Input() id: string;
    @Input() name: string;
    @Input() sex: string;
    @Input() age: string;
    @Input() size: string;
    @Input() desc: string;
    @Input() img: string;


    constructor(
        private modalController: ModalController,
        private sliceService: SliceService,
        private usersService: UsersService
    ) {

    }

    ngOnInit() {

    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalPage,
            componentProps: {
                name: this.name,
                sex: this.sex,
                size: this.size,
                age: this.age,
                desc: this.desc
            }
        });
        return await modal.present();
    }

    like(event) {
        let user = this.usersService.getUser();
        let userId = user._id;
        this.usersService.saveLike(this.id, userId);
        console.log('user id', userId)
        setTimeout(() => {
            this.usersService.checkIfMatch(this.id, userId);
        }, 100)
        document.getElementById('card').classList.remove('animate__fadeInRight')
        document.getElementById('card').classList.add('animate__fadeOutLeft')
        setTimeout(() => {
            this.sliceService.increaseS();
        }, 600)
    }

    dislike(event) {
        document.getElementById('card').classList.remove('animate__fadeInRight')
        document.getElementById('card').classList.add('animate__fadeOutLeft')
        setTimeout(() => {
            this.sliceService.increaseS();
        }, 600)
    }

}

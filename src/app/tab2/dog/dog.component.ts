import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { SliceService } from 'src/app/services/slice.service';
import { ModalPage } from '../modal/modal.page'

@Component({
    selector: 'app-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.scss'],
})
export class DogComponent implements OnInit {

    @Input() id: string;
    @Input() name: string;
    @Input() sex: string;
    @Input() age: number;
    @Input() size: string;
    @Input() desc: string;
    @Input() img: string;

    constructor(
        private modalController: ModalController,
        private sliceService: SliceService
    ) { }

    ngOnInit() { }

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
        console.log("User (UserId) likes " + this.name + "(" + this.id + ")");
        document.getElementById('card').classList.remove('animate__fadeInRight')
        document.getElementById('card').classList.add('animate__fadeOutLeft')
        setTimeout(() => {
            this.sliceService.increaseS();
        }, 600)
    }

    dislike(event) {
        console.log("User (UserId) dislikes " + this.name + "(" + this.id + ")");
        document.getElementById('card').classList.remove('animate__fadeInRight')
        document.getElementById('card').classList.add('animate__fadeOutLeft')
        setTimeout(() => {
            this.sliceService.increaseS();
        }, 600)
    }
}

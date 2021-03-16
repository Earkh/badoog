import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalPage } from '../modal/modal.page'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
})
export class DogComponent implements OnInit {

    @Input() name: string;
    @Input() sex: string;
    @Input() age: number;
    @Input() size: string;
    @Input() desc: string;
    @Input() img: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

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
}

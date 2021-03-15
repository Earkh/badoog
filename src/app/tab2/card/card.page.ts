import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalPage } from '../modal/modal.page'

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
        component: ModalPage,
        componentProps: {
            name: 'Lucky',
            sex: 'Macho',
            size: 'Mediano',
            age: '2',
            desc: 'Keep close to Nature\'s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods...'
        }
    });
    return await modal.present();
  }

}

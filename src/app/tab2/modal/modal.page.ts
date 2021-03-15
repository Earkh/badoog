import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() name: string;
  @Input() sex: string;
  @Input() age: number;
  @Input() size: string;
  @Input() desc: string;

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
      this.modalController.dismiss();
  }

}

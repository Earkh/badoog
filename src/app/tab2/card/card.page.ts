import { Component, OnInit } from '@angular/core';
import perretes from '../../data/perretes.json'


@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  dogs: any[] = perretes;

  constructor() {
      console.log(this.dogs)
  }

  ngOnInit() {
  }

}

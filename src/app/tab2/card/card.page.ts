import { Component, OnInit } from '@angular/core';
import { SliceService } from 'src/app/services/slice.service';
import perretes from '../../data/perretes.json'


@Component({
    selector: 'app-card',
    templateUrl: './card.page.html',
    styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

    dogs: any[] = perretes;

    constructor(private sliceService: SliceService) { }

    start: number = this.sliceService.getStart()

    ngOnInit() { }
}


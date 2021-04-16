import { Component, OnInit } from '@angular/core';
import { SliceService } from 'src/app/services/slice.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
    selector: 'app-card',
    templateUrl: './card.page.html',
    styleUrls: ['./card.page.scss'],
})
export class CardPage {

    dogs: any[] = [];

    constructor(
        private sliceService: SliceService,
        private userService: UsersService
    ) { }

    start: number = this.sliceService.getStart()



    public async ionViewWillEnter() {
        try {
            await this.userService.getFilters();
            this.dogs = [];
        } catch (error) {
            console.error(error);
        }
        this.userService.getUsers()
            .subscribe(res => {
                this.dogs.push(...res.users);
            })
        console.log(this.dogs)
    };

}


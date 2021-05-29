import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/interfaces/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.page.html',
    styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

    filter: Filter = {};
    userFilters: Filter = {};

    constructor(private userService: UsersService) { }

    async ngOnInit() {
        const filter = await this.userService.getFilters();

        this.filter.age = { lower: filter.minAge, upper: filter.maxAge };
        this.filter.sex = filter.sex;
        this.filter.size = filter.size;
    }

    updateFilters() {
        this.userFilters.minAge = this.filter.age.lower;
        this.userFilters.maxAge = this.filter.age.upper;
        this.userFilters.size = this.filter.size;
        this.userFilters.sex = this.filter.sex
        this.userService.saveFilters(this.userFilters);
    }

}

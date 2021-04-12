import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.page.html',
    styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

    filter: any = {
        age: null,
        minAge: null,
        maxAge: null,
        size: null,
        sex: null
    };
    userFilters: any = {
        minAge: null,
        maxAge: null,
        size: null,
        sex: null
    }

    constructor(private userService: UsersService) { }

    ngOnInit() {
    }

    saveFilters() {
        this.userFilters.minAge = this.filter.age.lower;
        this.userFilters.maxAge = this.filter.age.upper;
        this.userFilters.size = this.filter.size;
        this.userFilters.sex = this.filter.sex
        console.log(this.filter);
        this.userService.saveFilters(this.userFilters);
    }
}

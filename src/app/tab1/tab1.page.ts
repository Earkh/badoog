import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

interface Setting {
    icon: string;
    name: string;
    redirectTo?: string;
    function?: string;
}

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    settings: Setting[] = [
        {
            icon: 'person-circle-outline',
            name: 'Perfil',
            redirectTo: 'profile'
        },
        {
            icon: 'search-circle-outline',
            name: 'Filtros de búsqueda',
            redirectTo: 'filter'
        }
    ];

    constructor(private userService: UsersService) { }

    logout() {
        this.userService.logout();
    }

}

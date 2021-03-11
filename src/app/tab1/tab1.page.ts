import { Component } from '@angular/core';

interface Setting {
    icon: string;
    name: string;
    redirectTo: string;
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

  constructor() {}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { userResponse } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';

const URL = environment.URL;

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    token: string = null;

    constructor(private http: HttpClient,
        private storage: Storage) { }


    login(email: string, password: string) {
        const data = { email, password };
        this.http.post(`${URL}/user/login/`, data)
            .subscribe(resp => {
                console.log(resp);
            })
    }

    getUsers() {
        return this.http.get<userResponse>(`${URL}/user`);
    }
}

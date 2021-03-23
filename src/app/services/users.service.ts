import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, userResponse } from '../interfaces/interfaces';
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

        return new Promise(resolve => {
            this.http.post(`${URL}/user/login/`, data)
                .subscribe(resp => {
                    console.log(resp);
                    if (resp['ok']) {
                        this.saveToken(resp['token']);
                        resolve(true);
                    } else {
                        this.token = null;
                        this.storage.clear();
                        resolve(false);
                    }
                })
        });
    }

    register(usuario: User) {

        return new Promise(resolve => {
            this.http.post(`${URL}/user/create`, usuario)
                .subscribe(resp => {
                    console.log(resp);
                    if (resp['ok']) {
                        this.saveToken(resp['token']);
                        resolve(true);
                    } else {
                        this.token = null;
                        this.storage.clear();
                        resolve(false);
                    }
                });
        })
    }

    async saveToken(token: string) {
        this.token = token;
        await this.storage.set('token', token)
    }

    getUsers() {
        return this.http.get<userResponse>(`${URL}/user`);
    }
}

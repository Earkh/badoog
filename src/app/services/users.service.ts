import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, userResponse } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

const URL = environment.URL;

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    token: string = null;
    private user: User = {};

    constructor(private http: HttpClient,
        private storage: Storage,
        private navController: NavController) { }


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

    getUser() {
        return { ...this.user }
    }

    async saveToken(token: string) {
        this.token = token;
        await this.storage.set('token', token)
    }

    async loadToken() {
        this.token = await this.storage.get('token') || null;
    }

    async validateToken(): Promise<boolean> {

        await this.loadToken();

        if (!this.token) {
            this.navController.navigateRoot('');
            return Promise.resolve(false)
        }

        return new Promise<boolean>(resolve => {
            const headers = new HttpHeaders({
                'x-token': this.token
            })
            this.http.get(`${URL}/user/info`, { headers })
                .subscribe(resp => {

                    if (resp['ok']) {
                        this.user = resp['user'];
                        resolve(true);
                    } else {
                        this.navController.navigateRoot('');
                        resolve(false);
                    }

                })
        });
    }

    getUsers() {
        return this.http.get<userResponse>(`${URL}/user`);
    }
}

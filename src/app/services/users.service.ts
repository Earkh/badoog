import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, userResponse } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

const URL = environment.URL;

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    token: string = null;
    private user: User = {};

    constructor(private http: HttpClient,
        private storage: Storage,
        private navController: NavController,
        private fileTransfer: FileTransfer) { }


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

    logout() {
        this.token = null;
        this.user = null;
        this.storage.clear();
        this.navController.navigateRoot('', { animated: true });
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

    update(usuario: User) {

        const headers = new HttpHeaders({
            'x-token': this.token
        });
        return new Promise(resolve => {
            this.http.post(`${URL}/user/update`, usuario, { headers })
                .subscribe(resp => {
                    console.log(resp);
                    if (resp['ok']) {
                        this.saveToken(resp['token']);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
        });
    }

    imageUpload(img: string) {

        const options: FileUploadOptions = {
            fileKey: 'img',
            headers: {
                'x-token': this.token
            }
        }

        const fileTransfer: FileTransferObject = this.fileTransfer.create();
        fileTransfer.upload(img, `${URL}/user/upload`, options)
            .then(data => {
                console.log(data);
            }).catch(err => {
                console.log('Error', err);
            });
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

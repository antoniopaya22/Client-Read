import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    APIEndPoint: string;

    constructor(
        private http: HttpClient,
        private userApi: UserService) {
        this.APIEndPoint = environment.api;
    }

    getAllData() {
        const uri = `${this.APIEndPoint}/data`;
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'text/plain',
            'Authorization': `${this.userApi.getToken()}`
        });
        return this.http.get(uri, { headers: httpHeaders });
    }

    getByID(id) {
        const uri = `${this.APIEndPoint}/data/${id}`;
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${this.userApi.getToken()}`
        });
        return this.http.get(uri, { headers: httpHeaders })
    }

}

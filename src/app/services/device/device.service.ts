import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from '../user/user.service';

/**
 * Device Service Injectable
 */
@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    APIEndPoint: string;

    /**
   * Constructor
   * @param {HttpClient} http
   * @param {UserService} userApi
   */
    constructor(
        private http: HttpClient,
        private userApi: UserService) {
        this.APIEndPoint = environment.api;
    }

    /**
     * Obtiene todos los datos
     * @return Promise
     */
    getAllData() {
        const uri = `${this.APIEndPoint}/data`;
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'text/plain',
            'Authorization': `${this.userApi.getToken()}`
        });
        return this.http.get(uri, { headers: httpHeaders });
    }

    /**
     * Obtiene un dato por id
     * @param id
     * @return Promise
     */
    getByID(id) {
        const uri = `${this.APIEndPoint}/data/${id}`;
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${this.userApi.getToken()}`
        });
        return this.http.get(uri, { headers: httpHeaders })
    }

}

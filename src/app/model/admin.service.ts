import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

/**
 * 
 */
@Injectable()
export class AdminService {
    adminMode: boolean = false;
    adminToken: string = '';

    constructor(private http: Http, @Inject('API_URL') private apiUrl: string) {
    }

    enterAdminMode(passcode: string) {
        if (passcode == '1234') {
            this.adminMode = true;
            this.adminToken = passcode;
            console.log(passcode);
        }
    }
}
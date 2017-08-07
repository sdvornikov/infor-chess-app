import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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

    enterAdminMode(passcode: string) : Observable<Response>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(
            `${this.apiUrl}/admin`,
            `passcode=${passcode}`,
            {headers})
        .map((response: Response) => {
            if(response.ok) {
                this.adminMode = true;
                this.adminToken = passcode;
            }
            return response;
        });
    }

    exitAdminMode() {
        this.adminMode = false;
        this.adminToken = "";
    }
}
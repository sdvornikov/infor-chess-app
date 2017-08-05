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
    busy: boolean = false;

    constructor(private http: Http, @Inject('API_URL') private apiUrl: string) {
    }

    enterAdminMode(passcode: string) : void{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.busy = true;
        this.http.post(
            `${this.apiUrl}/admin`,
            `passcode=${passcode}`,
            {headers})
            .subscribe((res: Response) => {
                this.adminMode = true;
                this.adminToken = passcode;
                this.busy = false;
            }, (err) => {
                console.log("failed to unlock admin mode");
                // failed to unlock admin mode
                this.busy = false;
            });
    }
}
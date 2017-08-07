import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Player } from './player.model'
import { AdminService } from './admin.service'


/**
 * 
 */
@Injectable()
export class PlayerService {
    constructor(private http: Http, @Inject('API_URL') private apiUrl: string, private adminService: AdminService) {
    }

    players() : Observable<Player[]> {
        return this.http.get(`${this.apiUrl}/players`).map((response: Response) => {
            return (<any>response.json()).map(item => {
                return new Player({
                            id: item.id,
                            name: item.name,
                            rating: item.rating,
                            lastPlayedTime: item.lastPlayedTime});
            });
        });
    }

    addPlayer(player: Player) : Observable<Response> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(
            `${this.apiUrl}/players`,
            `name=${player.name}&token=${this.adminService.adminToken}`,
            {headers});
    }
}

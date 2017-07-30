import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Player } from './player.model'

export const API_URL: string = "http://localhost:8000";

/**
 * 
 */
@Injectable()
export class PlayerService {
    constructor(private http: Http, @Inject(API_URL) private apiUrl: string) {
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
}

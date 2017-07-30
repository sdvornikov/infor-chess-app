import { PlayerService, API_URL } from './model/player.service';

export const inforChessInjectables: Array<any> = [
    {provide: PlayerService, useClass: PlayerService}, 
    {provide: API_URL, useValue: API_URL}
];
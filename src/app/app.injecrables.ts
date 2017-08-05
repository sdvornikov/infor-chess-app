import { PlayerService } from './model/player.service';
import { AdminService } from './model/admin.service';
import { API_URL } from './app.config'



export const inforChessInjectables: Array<any> = [
    {provide: PlayerService, useClass: PlayerService}, 
    {provide: AdminService, useClass: AdminService}, 
    {provide: 'API_URL', useValue: API_URL}
];
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../model/admin.service';
import { PlayerService } from '../model/player.service';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService, private adminService: AdminService) { 
    this.players = [new Player({id: "", name: "", rating: ""})]
  }

  playerAdded(evt: boolean) {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService.players().subscribe(players => this.players = players);
  }

  ngOnInit() {
    this.loadPlayers()
  }

}

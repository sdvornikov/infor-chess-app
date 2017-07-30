import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../model/player.service'
import { Player } from '../model/player.model'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) { 
    this.players = [new Player({id: "n/a", name: "n/a", rating: "n/a"})]
  }

  ngOnInit() {
        this.playerService.players().subscribe(players => this.players = players);
  }

}

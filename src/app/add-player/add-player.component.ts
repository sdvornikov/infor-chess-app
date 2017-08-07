import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { PlayerService } from '../model/player.service';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  @Output() playerAdded: EventEmitter<boolean> = new EventEmitter<boolean>();
  message: string;
  isError: boolean;
  constructor(private playerService: PlayerService) { }

  addPlayer(playerName: string) {
    let player: Player = new Player({name: playerName});
    this.playerService.addPlayer(player).subscribe((res: Response) => {
      this.playerAdded.emit(true);
      this.message = "New player is added";
      this.isError = false;
    } , (err) => {
      this.message = "Failed to add a player";
      this.isError = true;
    });
  }

  ngOnInit() {
  }

}

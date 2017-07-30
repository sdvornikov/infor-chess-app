import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlayerListComponent } from './player-list/player-list.component';

import { inforChessInjectables } from './app.injecrables';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [inforChessInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlayerListComponent } from './player-list/player-list.component';

import { inforChessInjectables } from './app.injecrables';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'players', pathMatch: 'full' },
  { path: 'players', component: PlayerListComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlayerListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [inforChessInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }

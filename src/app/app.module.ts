import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BoardComponent,
    GameComponent,
    SquareComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

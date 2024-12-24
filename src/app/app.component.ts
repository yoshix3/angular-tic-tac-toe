import { Component, VERSION } from '@angular/core';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  imports: [GameComponent]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}

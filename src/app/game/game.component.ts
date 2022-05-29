import { Component, OnInit } from '@angular/core';

type squareType = {
  squares: string[];
};

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  history: squareType[] = [{ squares: Array(9).fill(null) }];
  status: string = '';
  stepNumber: number = 0;
  xIsNext: boolean = true;

  constructor() {}

  ngOnInit() {}
  jumpTo(num: number) {
    this.stepNumber = num;
    this.xIsNext = num % 2 === 0;
  }
  onClicked(event: number) {}
  trackFn(index: any, move: squareType) {
    return index;
  }
}

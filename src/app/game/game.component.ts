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

  ngOnInit() {
    this.status = 'Next player: ' + (this.xIsNext ? 'X' : 'O');
  }
  jumpTo(num: number) {
    this.stepNumber = num;
    this.xIsNext = num % 2 === 0;
  }
  onClicked(event: number) {
    const his = this.history.slice(0, this.stepNumber + 1);
    const sq = his[his.length - 1].squares.slice();
    if (this.calculateWinner(sq) || sq[event]) {
      return;
    }
    sq[event] = this.xIsNext ? 'X' : 'O';
    this.history = this.history.concat([{ squares: sq }]);
    this.stepNumber = this.history.length - 1;

    const winner = this.calculateWinner(this.history[this.stepNumber].squares);

    if (winner) {
      this.status = 'Winner: ' + winner;
    } else {
      this.xIsNext = !this.xIsNext;
      this.status = 'Next player: ' + (this.xIsNext ? 'X' : 'O');
    }
  }
  trackFn(index: any, move: squareType) {
    return index;
  }
  private calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}

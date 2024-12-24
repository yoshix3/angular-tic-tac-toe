import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  imports: [SquareComponent]
})
export class BoardComponent implements OnInit {
  squares = input.required<string[]>();
  @Output() clicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
  onClicked(event: number) {
    this.clicked.emit(event);
  }
}

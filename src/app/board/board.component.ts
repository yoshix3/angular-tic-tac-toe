import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Input() squares: string[];
  @Output() clicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
  onClicked(event: number) {
    this.clicked.emit(event);
  }
}

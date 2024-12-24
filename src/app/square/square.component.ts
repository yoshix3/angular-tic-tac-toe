import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  value = input.required<string>();
  @Output() clicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  buttonClick() {
    this.clicked.emit();
  }
}

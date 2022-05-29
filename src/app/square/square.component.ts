import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() value: string;
  @Output() clicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  buttonClick() {
    this.clicked.emit();
  }
}

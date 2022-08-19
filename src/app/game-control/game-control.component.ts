import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  asb;
  lastNumber = 0;
 @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.asb = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber ++
    }, 1000)
  }

  onStopGame(){
    clearInterval(this.asb)
  }

}

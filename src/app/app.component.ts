import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumbers: number[] = []
  oddNumbers: number[] = []

  onIntervalFired(adad: number){
    if(adad % 2 === 0){
      this.evenNumbers.push(adad)
    } else {
      this.oddNumbers.push(adad)
    }
  }
}

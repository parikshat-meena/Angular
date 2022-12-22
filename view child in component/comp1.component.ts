import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  counter :number =0
  constructor() { }

  ngOnInit(): void {
  }
  incrementCounter(){
    this.counter++
  }
  decrementCounter(){
    this.counter--
  }
}

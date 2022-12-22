import { Component, OnInit, ViewChild } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @ViewChild(Comp1Component) cp1: Comp1Component|undefined
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.cp1?.incrementCounter()
  }
  decrement(){
    this.cp1?.decrementCounter()
  }

}

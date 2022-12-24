import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  username: string = 'Parikshat'
  name: string = "Leo fire"
  disabledInput: boolean = true
  counter:boolean = true
  class:string = "text-danger"
  img = "./../../../assets/image/messi.jfif"
  constructor() { }
  enableInput(){
    this.disabledInput= false
  }
  switchPlayer(){
    if(this.counter== true)
    { 
      this.name = "messi ice"
      this.img = "./../../../assets/image/messi3.jfif"
      this.counter = false
      this.class = "text-info"
    }
    else
    {
      this.name = "Leo fire"
      this.img = "./../../../assets/image/messi.jfif"
      this.counter = true
      this.class = "text-danger"
    }
  }
  clickMe(){
    console.log("Button clicked")
  }
  ngOnInit(): void {
  }

}

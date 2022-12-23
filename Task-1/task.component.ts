import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  cars:string[] = ["Honda","Audi","BMW","Tata","Maruti","Ferrari"]
  bikes:string[] =["Hero","TVS", "Yamaha","Suzuki","Honda","Bajaj"]
  counter:boolean = true
  selection:string = " "
  constructor() { }
  carShow(){
    if(this.counter == true)
    {    
      this.counter = false
    }
  }
  bikeShow(){
  if(this.counter == false)
    this.counter= true
  }
  carmsg(val:any){
    this.selection = val
  }

  ngOnInit(): void {
  }

}

import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
c:boolean = false
b:boolean = false
msg:string = " "
result:string =" "
  constructor() { }

  ngOnInit(): void {
  }
  serachButton(res:any){
    this.result =  res
    this.display()
  }
  display()
  {
    if(this.result == "cars")
    {
      this.c= true
      this.b = false
      this.msg=" "
    }
    else if(this.result == "bikes"){
      this.b= true
      this.c = false
      this.msg = " "
    }
    else{
      this.msg= "Sorry! images not found"
      this.c = false
      this.b = false
    }
  }
}

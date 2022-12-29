import { Component, OnInit } from '@angular/core';
import { mycourses, regexName } from 'src/app/shared/common-data/constants';

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.css']
})
export class UtdfComponent implements OnInit {

  // course : string[] =['Java','Python','React','C++','Angular']
  course : string[]= mycourses
  reName:string = regexName
  constructor() { }

  ngOnInit(): void {
  }
getdata(data : any){
  console.log(data)
}
}

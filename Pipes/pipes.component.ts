import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  msg = "Welcome to the World of Angular"

  emp = {
    name:"parikshat",
    id:54,
    salary:60000,
    dept: "software development"

  }

  dateobj = new Date()
  students = [
    {roll:101,name:"parikshat",gender:"male",address:"Narmadapuram",contact:9179621911},
    {roll:102,name:"Neetesh",gender:"male",address:"indore",contact:8179621911},
    {roll:103,name:"Jagrati",gender:"female",address:"canada",contact:7179621911},
    {roll:104,name:"B L Meena",gender:"male",address:"spm",contact:6179621911},
    {roll:105,name:"Sheela Meena",gender:"female",address:"semri",contact:5179621911},
  ]

  num = 10
  radius = 10
  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  setpara(name:any)
  {
    this._router.navigate(["/pipes",name]);
  }
}

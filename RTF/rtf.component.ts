import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mycourses, regexName } from 'src/app/shared/common-data/constants';
@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent implements OnInit {
empData:any
// courses : string[] =['Java','Python','React','C++','Angular']
courses : string[]= mycourses
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.empData= new FormGroup(
    //   {
    //     fname: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3,30}')]),
    //     lname: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3,30}')]),
    //     courses: new FormControl('',Validators.required),
    //     term: new FormControl('',Validators.requiredTrue),   
    //     email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),  
    //     num: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')])})
    this.empData = this.fb.group(
      {
        fname: ['',[Validators.required,Validators.pattern(regexName)]],
        lname: ['',[Validators.required,Validators.pattern(regexName)]],
        courses: ['',Validators.required],
        term:['',Validators.requiredTrue],
        email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        num: ['',[Validators.required,Validators.pattern('[0-9]{10}')]]
      }
    )
  }
  getData(data:any){
    console.log(data)
  }
  }

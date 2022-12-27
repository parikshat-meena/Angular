import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-fetch-user',
  templateUrl: './fetch-user.component.html',
  styleUrls: ['./fetch-user.component.css']
})
export class FetchUserComponent implements OnInit {
  empObj:any
  constructor(private globalService: GlobalService) { }
  
  ngOnInit(): void {
    
    this.globalService.getRecords("User").subscribe((res)=>{
      console.log(res)
      this.empObj= res
    })
  }

}

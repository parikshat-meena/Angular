import { Component, OnInit } from '@angular/core';
import { FakeDataService } from 'src/app/shared/services/fake-data.service';

@Component({
  selector: 'app-fake-data',
  templateUrl: './fake-data.component.html',
  styleUrls: ['./fake-data.component.css']
})
export class FakeDataComponent implements OnInit {
  fakeData:any
  constructor(private fdService: FakeDataService) { }

  ngOnInit(): void {
    this.fdService.getData().subscribe((res)=>{
      console.log(res)
      this.fakeData=res
    })
  }

}

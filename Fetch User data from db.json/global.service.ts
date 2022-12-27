import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 
  baseURL:string= "http://localhost:3000"
 
  constructor(private httpClient: HttpClient) { }

  getRecords(path:string){
    const url = `${this.baseURL}/${path}`
    return this.httpClient.get(url)
  }

  getRecord(path:string,id:any){
    const url = `${this.baseURL}/${path}/${id}`
    return this.httpClient.get(url)
  }
  deleteRecords(path:string,id:any)
  {
    const url = `${this.baseURL}/${path}/${id}`
    return this.httpClient.delete(url)
  }

  addRecord(path:string,empData:any){
    const url = `${this.baseURL}/${path}`
    return this.httpClient.post(url,empData)
  }

  updateRecord(path:string,empData:any)
  {
    const url= `${this.baseURL}/${path}/${empData.id}`
    return this.httpClient.put(url,empData)
  }

  signIn(user:any)
  {
    sessionStorage.setItem("userkey",user)
  }
  signOut(){
    sessionStorage.removeItem("userkey")
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexLaunchService {
  private dataSource = new BehaviorSubject<any>([]);
  data = this.dataSource.asObservable();
  constructor(private http:HttpClient) { }

  getLauchData(queryParam:any){
    let url= 'https://api.spacexdata.com/v3/launches?limit=100'+queryParam;
    return this.http.get(url);
  }


  setData(data:any){
    this.dataSource.next(data);
  }

  getData(){
    return this.data;
  }
}

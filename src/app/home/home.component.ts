import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { SpacexLaunchService } from '../services/spacex-launch.service';
import {filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas:any;
  dataObservable:Subscription;
  constructor(private router: Router, private launchService:SpacexLaunchService) { 
    
    this.router.events.pipe(filter((event:RouterEvent)=> event instanceof NavigationEnd)).subscribe(()=>{
      this.dataObservable= this.launchService.getData().subscribe(result=>{
        if(result){
          this.datas=result;
        }
      });
      

    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if(this.dataObservable){
      this.dataObservable.unsubscribe();
    }
  }
}

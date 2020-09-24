import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpacexLaunchService } from './services/spacex-launch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spacex';
  years:number[];
  launchSuccess:boolean;
  landSuccess:boolean;
  launchYear:number;
  toggleYear:boolean = false;
  toggleLanding:boolean = false;
  toggleLaunch:boolean = false;
  constructor(private router: Router, private launchService:SpacexLaunchService) { 
    this.callLaunchService('');
  }

  ngOnInit(): void {
    this.years =[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
    
  }

  showYear(filterType:string,filterValue:any){
    if(filterType && filterType=='launch_year'){
      if(this.launchYear!=filterValue){
        this.launchYear= filterValue;
        this.toggleYear= true;
      }else{
        this.launchYear=null;
        this.toggleYear=false;
      }

    }else if(filterType && filterType=='launch_success'){
      if(this.launchSuccess!=filterValue){
        this.launchSuccess= filterValue;
        this.toggleLaunch= true;
      }else{
        this.launchSuccess=null;
        this.toggleLaunch=false;
      }
    } else if(filterType && filterType=='land_success'){
      if(this.landSuccess!=filterValue){
        this.landSuccess= filterValue;
        this.toggleLanding= true;
      }else{
        this.landSuccess=null;
        this.toggleLanding=false;
      }
    }else{
      this.launchYear=null;
      this.launchSuccess=null;
      this.landSuccess=null;
      this.toggleYear=false;
      this.toggleLaunch=false;
      this.toggleLanding=false;
    }

    let queryString='';
    if(this.toggleYear){
      queryString+='&launch_year='+this.launchYear;
    }
    if(this.toggleLaunch){
      queryString+='&launch_success='+this.launchSuccess;
    }
    if(this.toggleLanding){
      queryString+='&land_success='+this.landSuccess;
    }
    
    this.callLaunchService(queryString);
    this.router.navigate(['/searchResult']);
  }

  callLaunchService(queryString){
    this.launchService.getLauchData(queryString).subscribe(result=>{
      if(result){
        this.launchService.setData(result);
            
      }
    },err=> console.log('Error occured')
    )
  }
}

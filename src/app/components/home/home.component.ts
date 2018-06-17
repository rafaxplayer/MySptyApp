import { Component,  OnDestroy } from '@angular/core';
import { SpotiService } from '../../services/spoti.service';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{

  albums:any[]=[];
  
  sPotisubcription:Subscription;

  constructor(private spotiService:SpotiService, private router:Router) { 

    this.sPotisubcription = this.spotiService.getNews().subscribe((data:any)=>{
     
      this.albums = data
      console.log(this.albums);
      
    },(error) => console.log(error))
    
  }

  

  ngOnDestroy(){
    this.sPotisubcription.unsubscribe();
  }


}

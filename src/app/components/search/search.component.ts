import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../../services/spoti.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  albums:Array<any>;
  spotiSubscribe:Subscription;
  routeSubscribe:Subscription;
  term:string ='';

  constructor(private spotiservice:SpotiService) {
    
  }

  ngOnInit() {

    this.spotiservice.currentterm.subscribe((term)=>{
      if(term.length>0){
        this.term=term;
        this.spotiSubscribe = this.spotiservice.search(term).subscribe((data:any)=>{
          console.log(data);
          this.albums = data;
        },(error) => console.log(error))
      }
       
    });
    
  }

  ngOnDestroy(): void {
    if(this.spotiSubscribe){
      this.spotiSubscribe.unsubscribe();
    }
    
  }

}

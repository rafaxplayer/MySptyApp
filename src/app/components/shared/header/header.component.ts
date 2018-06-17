import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotiService } from '../../../services/spoti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private spotiService:SpotiService) { }

  ngOnInit() {}

  search(term:string){
    if(term.length > 0){
      this.spotiService.setTerm(term);
      if(this.router.url.indexOf('search') != -1 ){
        console.log('issearch');
        return;
      }
      this.router.navigate(['/search']);
    }

  }

}

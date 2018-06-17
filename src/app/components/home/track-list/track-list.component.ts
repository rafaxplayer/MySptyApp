import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiService } from '../../../services/spoti.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  tracks:any[]=[];
  album:any={};

  constructor(private spotiService:SpotiService,private activeRoute:ActivatedRoute) { }

  ngOnInit() {

    let albumId= this.activeRoute.snapshot.paramMap.get('id');
    this.spotiService.getAlbum(albumId).subscribe((data:any)=>{
      console.log(data);
      this.tracks= data.tracks.items;
      this.album=data;
      
    },(error) => console.log(error))


  }

}

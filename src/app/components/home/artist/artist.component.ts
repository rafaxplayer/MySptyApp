import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../../../services/spoti.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  
  artist:any={};
  albums:any[]=[];
  artistTopTracks:any[]=[];
  artistImage:string='';

  constructor(private spotiService:SpotiService, private activedRoute:ActivatedRoute) {

    let id = this.activedRoute.snapshot.paramMap.get('id');

    this.spotiService.getArtistAlbums(id).subscribe(data =>{

      this.albums = data;
  
    },(error) => console.log(error))

    this.spotiService.getArtistInfo(id).subscribe((data:any) =>{

      this.artist = data;
      this.artistImage= data.images[0].url;
  
    },(error) => console.log(error) )

    this.spotiService.getArtistTopTracks(id).subscribe((data:any) =>{

      this.artistTopTracks = data;
      console.log('artistTopTracks',this.artistTopTracks);
      
    },(error) => console.log(error) )

   }

  ngOnInit() {
  }

}

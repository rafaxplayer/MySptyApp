import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  @Input() album:any;

  constructor(private router:Router) { }

  goAlbum(id:number){
    this.router.navigate(['/tracks',id]);
  }

  goArtist(id:number){
    this.router.navigate(['/artist',id]);
  }
 
}

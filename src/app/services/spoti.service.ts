import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,  HttpHeaders} from '@angular/common/http';
import{ BehaviorSubject} from 'rxjs' ;
import { map } from 'rxjs/operators';


@Injectable()
export class SpotiService {
 
  public term = new BehaviorSubject ( '' );
    
  currentterm = this.term.asObservable ();

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQADjGE0OYlD1vq4eHsBvgmsf4QMnPBtNwJdZi8o9aHCfHHPpW206_HvQrB1F4U9zYcc-Hlt4o2BUw2iIbT6U-drIdyC6qtNgXdblZByOR5DJ0gSP29rF-pqidP-ArRar0dAcG5LZOfSZyu4kjyjOcdixkGsi3LFIrB3SMg4s3lu55vEP2cJ5r53J40DmgyhKWVqkGYtP22Q61kufxhiPh10B2raDdlFTBUh9jO07bdq_HpmBlahM3915VRiZodrTuQvvK43yM0whw'
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`,{headers});
  }
  
  getNews(){
    return this.getQuery('browse/new-releases')
              .pipe(map(data => data['albums'].items));
  }

  setTerm(term:string){
    this.term.next(term);
  }

  getAlbum(id:string){
    return this.getQuery(`albums/${id}`);
               /* .pipe(map(data => data['items'])); */
  }

  search(term:string,type:string='album'){
    return this.getQuery(`search?q=${term}&type=${type}`)
               .pipe(map(data => data['albums'].items));;
  }
// artist functions
  getArtistAlbums(id:string){
    return this.getQuery(`artists/${id}/albums`)
               .pipe(map(data => data['items']));

  }

  getArtistInfo(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getArtistTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
               .pipe(map(data => data['tracks']));
  }
}

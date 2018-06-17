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
      'Authorization':'Bearer BQAAHqsExZcwLLNDRwX4tsfcv_0ieDe4yu5BzwqPQ3AfBsPlsS0EduUFDMKB4if-UzhwzGWSXpJNnS-1u397bStzppZNOBDRSnfSNnvuEqAwpdqcZnwtSmzBrmtF9mqfABhDlMe1hGFPEMladIs06P5Kj9323PPFh1FUcQfW-hK8egL3GJxOEDry2y92LwRBJAhI9z7npgARtcfMIIq5Ht4xsFl2Yuwh8oAFCGgFSGXggPrArExTgvXHFJojZjdP4YD7uPR1'
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

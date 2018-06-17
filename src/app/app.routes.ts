import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TrackListComponent } from './components/home/track-list/track-list.component';
import { ArtistComponent } from './components/home/artist/artist.component';


export const ROUTES:Routes=[
    {path: '', pathMatch: 'full' , redirectTo: 'home'},
    {path: 'home', component:HomeComponent},
    {path: 'search', component:SearchComponent},
    {path: 'tracks/:id', component:TrackListComponent},
    {path: 'artist/:id', component:ArtistComponent},
    {path: '**', pathMatch: 'full' , redirectTo: 'home'},
   
    
]


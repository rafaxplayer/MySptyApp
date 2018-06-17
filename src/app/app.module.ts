import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

//http
import { HttpClientModule } from '@angular/common/http';

//Services
import { SpotiService } from './services/spoti.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumComponent } from './components/home/album/album.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/shared/header/header.component';

import { TrackListComponent } from './components/home/track-list/track-list.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistComponent } from './components/home/artist/artist.component';

//pipes
import { FormattimePipe } from './pipes/formattime.pipe';
import { SpotiWidgetDoomPipe } from './pipes/spotiwidgetdom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumComponent,
    SearchComponent,
    HeaderComponent,
    TrackListComponent,
    NoimagePipe,
    SpotiWidgetDoomPipe ,
    LoadingComponent,
    ArtistComponent,
    FormattimePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [SpotiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pelicula:string;
  movies = [{}];

  constructor() {  }

  FilmToSearch() {
    this.FindSearch(this.pelicula).then(res => this.movies = res.Search);
  }

  FindSearch(film) {
    return fetch('http://www.omdbapi.com/?s=' + film + '&apikey=9e527135').then(response => response.json());
  }
}
import { Component, OnInit } from '@angular/core';
import { DataMovie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas: DataMovie[] = [];
  populares: DataMovie[] = [];

  constructor( private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getDataMovies().subscribe(resp=> {
      this.peliculas = resp.results;
      console.log('peliculas:' , this.peliculas);
    });

    this.moviesService.getPopularMovies().subscribe(resp=> {
      this.populares = resp.results;
      console.log('populares:' , this.populares);
    })
  }


}

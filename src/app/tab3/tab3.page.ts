import { Component } from '@angular/core';
import { DataMovie, DetailMovie, Genre } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: any[] = [];
  generos: Genre[] = [];

  favoriteByGenre: any[] = [];

  constructor(
    private storage: StorageService,
    private moviesService: MoviesService,
  ) {}

  async ionViewWillEnter() {
    this.peliculas = await this.storage.getItem();
    this.generos = await this.moviesService.getGenres();

    this.movieByGenre(this.generos, this.peliculas)
  }

  movieByGenre( generos: Genre[], peliculas: any[] ) {
    generos.forEach(genero => {
      this.favoriteByGenre.push({
          genero: genero.name,
          pelis: peliculas.filter(peli => {
            return peli.genres.find( genre => genre.id === genero.id)
          })
      });
    });
  }

}

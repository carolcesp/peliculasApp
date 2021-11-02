import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseMovies, DetailMovie, ResponseCredits } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private popularPage = 0;

  constructor( private http: HttpClient) { }

  private getQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;

    return this.http.get<T>(query);
  }

  getDataMovies() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const ultimoDia = new Date( date.getFullYear(), date.getMonth() + 1,0).getDate();

    let monthString;

    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    // formato de fecha: año-mes-dia
    const inicio = `${ date.getFullYear() }-${ monthString }-01`;
    const fin = `${ date.getFullYear() }-${ monthString }-${ ultimoDia }`;

    return this.getQuery<ResponseMovies>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`)
  }

  getPopularMovies() {
    this.popularPage++;

    const query = `/discover/movie?sort_by=popularity.desc%page=${this.popularPage}`;

    return this.getQuery<ResponseMovies>(query);
  }

  getDetailMovie(id) {
    return this.getQuery<DetailMovie>(`/movie/${ id }?a=1`);
  }

  getActors(id) {
    return this.getQuery<ResponseCredits>(`/movie/${ id }/credits?a=1`);
  }


}

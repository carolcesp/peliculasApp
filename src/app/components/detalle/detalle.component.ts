import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, DetailMovie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: DetailMovie = {};
  actores: Cast[] = [];
  textOculto: number = 150;


  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.moviesService.getDetailMovie(this.id).subscribe(resp => {
      console.log('resp detail: ',resp);
      this.pelicula = resp;
    })

    this.moviesService.getActors(this.id).subscribe(resp => {
      console.log('resp actors: ',resp);
      this.actores = resp.cast;
    })
  }

  return() {
    this.modalCtrl.dismiss();
  }

  addFavorite() {

  }

}

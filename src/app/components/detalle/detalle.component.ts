import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, DetailMovie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

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
  estrella: string = 'star-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private storage: StorageService
    ) { }

  ngOnInit() {

    this.storage.existMovie(this.id)
      .then(existe => this.estrella = (existe) ? 'star' : 'star-outline');

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
    const existe = this.storage.setItem(this.pelicula);
    this.estrella = (existe) ? 'star' : 'star-outline';

  }

}

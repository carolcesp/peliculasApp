import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { DataMovie, DetailMovie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  peliculas: DetailMovie[] = [];
  cargando = false;

  textoBuscar = '';
  sugerencias: string [] = [
    'Scape room',
    'Alerta roja',
    'Coco',
    'Wonder Woman',
    'La vida es bella'
  ];

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,

    ) {}

  buscarPelicula(event) {
    const value = event.detail.value;

    if (value !== "") {
      this.cargando = true;
      this.moviesService.getSearchMovie(value).subscribe(resp => {
        this.peliculas = resp['results'];
        this.cargando = false;
      });
    } else{
      this.cargando = false;
      this.peliculas = [];
    }
  }

  async showDetail(id) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });

    modal.present();
  }
}

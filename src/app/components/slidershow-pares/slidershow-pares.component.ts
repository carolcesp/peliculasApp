import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DataMovie } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidershow-pares',
  templateUrl: './slidershow-pares.component.html',
  styleUrls: ['./slidershow-pares.component.scss'],
})
export class SlidershowParesComponent implements OnInit {

  @Input() peliculasPopulares: DataMovie[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -15
  };

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  getMoreMovies() {
    this.cargarMas.emit();
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

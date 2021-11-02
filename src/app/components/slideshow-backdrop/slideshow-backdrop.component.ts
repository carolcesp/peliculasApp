import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataMovie } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: DataMovie[] = [];

  slideOpts = {
    slidesPerView: 1.4,
    freeMode: true
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

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

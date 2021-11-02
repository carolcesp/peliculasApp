import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DetailMovie } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  peliculas: DetailMovie[] = [];

  constructor(
    private storage: Storage,
    private toasCtrl: ToastController
    ) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storage = storage;
  }

  async presentToast(message: string) {
    const toas = await this.toasCtrl.create({
      message,
      duration: 1500
    });
    toas.present();
  }

  async setItem(movie: any) {
    let existe = false;
    let mensaje = '';


    for (const peli of this.peliculas) {
      if (peli.id === movie.id) {
        existe = true;
        break
      }
    }

    if (existe) {
      this.peliculas = this.peliculas.filter(movie => movie.id !== movie.id);
      mensaje = 'Favorito eliminado'
    } else {
      this.peliculas.push(movie)
      mensaje = 'Favorito añadido'
    }

    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);

    return !existe;
  }

  async getItem() {
    const movies = await this.storage.get('peliculas');

    this.peliculas = movies || [];
    return this.peliculas;
  }

  async existMovie(id) {
    id = Number(id);

    await this.getItem();
    const existe = this.peliculas.find( peli => peli.id === id)

    return (existe) ? true : false
  }


}

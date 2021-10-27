import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagenpipe'
})

export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {

    if(!img) {
      return './assets/no-image-banner.j';
    }

    const imgUrl = `${ URL }/${ size }${ img }`;

    return imgUrl;
  }

}
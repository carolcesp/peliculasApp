import { Component, OnInit, Input } from '@angular/core';
import { DataMovie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slidershow-pares',
  templateUrl: './slidershow-pares.component.html',
  styleUrls: ['./slidershow-pares.component.scss'],
})
export class SlidershowParesComponent implements OnInit {

  @Input() populares: DataMovie[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -15
  };

  constructor() { }

  ngOnInit() {}

}

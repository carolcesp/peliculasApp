import { Component, OnInit, Input } from '@angular/core';
import { DataMovie } from 'src/app/interfaces/interfaces';

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

  constructor() { }

  ngOnInit() {}

}

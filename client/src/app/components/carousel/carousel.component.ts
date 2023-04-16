import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  videos = [
    {
      id: 1,
      label: "Incontra e vivi nuove culture"
    },
    {
      id: 2,
      label: "Rilassati sulle spiagge della Malesia"
    },
    {
      id: 3,
      label: "Esplora l'entroterra degli Stati Uniti"
    }
  ]

  percorso = "../../../assets/video/carousel-"
}

import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel.model';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.scss']
})
export class TravelsListComponent implements OnInit{

  viaggi: Travel[];

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.travelService.getTravels().subscribe({
      next: (response) => {
        this.viaggi = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}

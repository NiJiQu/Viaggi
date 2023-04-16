import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel.model';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent implements OnInit{
  @Input() pag: string;

  travels: Travel[];
  viaggiTotali: number;
  page = 1;
  viaggiPerPagina = 6;
  ruolo: any;

  constructor(private travelService: TravelService){}

  ngOnInit(): void {
      this.prendiViaggi();
      if(JSON.parse(localStorage.getItem('user')) !== null) {
        this.ruolo = JSON.parse(localStorage.getItem('user')).role;
      }
  }

  prendiViaggi(){
    this.travelService.getTravels().subscribe({
      next: (response) => {
        this.travels = response;
        if(this.pag){
          this.travels = this.travels.sort((a,b) => a._id - b._id).slice(0,6);
        }
        this.viaggiTotali = this.travels.length;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  paginate(event){
    event.page = event.page + 1;
    this.page = event.page;
  }
}

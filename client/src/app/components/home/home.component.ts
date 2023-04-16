import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel.model';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  viaggi: Travel[];

  nome: string;
  cognome: string;
  email: string;
  eta: string;

  constructor(private travelService: TravelService, private userService: UserService) {}

  ngOnInit(): void {
    this.travelService.getTravels().subscribe({
      next: (response) => {
        this.viaggi = response;
        this.viaggi = this.viaggi.sort((a,b) => a._id - b._id).slice(0,6);
      },
      error: (error) => {
        console.log(error);
      }
    })

    this.prendiDatiUtente();
  }

  prendiDatiUtente() {
    this.userService.datiUtente.subscribe((res: any) => {
      this.nome = res.nome;
      this.cognome = res.cognome;
      this.email = res.email;
      this.eta = res.eta;
    })
  }

  closeModal() {
    this.nome = '';
    this.email = '';
  }

}

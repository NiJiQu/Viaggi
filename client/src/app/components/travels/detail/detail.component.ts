import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from 'src/app/models/travel.model';
import { TravelService } from 'src/app/services/travel.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  viaggio: Travel;
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private travelService: TravelService,
    public authService: AuthService
  ){}

  ngOnInit(): void {
    this.onGetTravel();
  }

  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  onGetTravel(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.travelService.getTravel(id).subscribe({
      next: (res) => {
        this.viaggio = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}

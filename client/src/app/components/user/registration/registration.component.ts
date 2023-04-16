import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  newUser: any;

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    eta: new FormControl('', Validators.required),
    accetto: new FormControl('', Validators.requiredTrue)
  },
  [CustomValidator.matchValidator('password', 'ripetiPassword')]
  );

  constructor(
    private config: PrimeNGConfig,
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
    ) {}

  ngOnInit() {
      this.config.setTranslation({
        weak: 'Debole',
        medium: 'Medio',
        strong: 'Forte',
        passwordPrompt: 'Sicurezza Password'
      });
  }

  OnSubmit(){
    const user = {
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      email: this.form.value.email,
      password: this.form.value.password,
      eta: this.form.value.eta
    }

    const userHome = {
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      email: this.form.value.email,
      eta: this.form.value.eta
    }

    this.userService.datiUtente.next(userHome);

    this.userService.addUser(user).subscribe({
      next: (response) => {
        this.newUser = response;
      },
      error: (error) => {
        console.log(error);
      }
    })

    this.router.navigate(['home']);
  }

  open(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modaleServizi', size: 'lg', centered: true}).result.then((res) => {
      console.log('ok')
    }).catch((res) => {
      console.log('not ok')
    });
  }
}

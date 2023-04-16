import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TravelService } from 'src/app/services/travel.service';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-new-travel',
  templateUrl: './new-travel.component.html',
  styleUrls: ['./new-travel.component.scss']
})
export class NewTravelComponent {

  newTravel: any;

  form = new FormGroup({
    titolo: new FormControl('', Validators.required),
    intestazione: new FormControl('', Validators.required),
    descrizione: new FormControl('', Validators.required),
    immagine: new FormControl('', Validators.required),
    partenza: new FormControl('', Validators.required),
    ritorno: new FormControl('', Validators.required),
    posti: new FormControl('', Validators.required),
    prezzo: new FormControl('', Validators.required),
    pubblicato: new FormControl('')
  })

  Editor = ClassicEditorBuild;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'codeBlock',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
  };

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private travelService: TravelService
  ){}

  OnSubmit(){
    const Travel = this.form.value;

    this.travelService.addTravel(Travel).subscribe({
      next: (response) => {
        this.newTravel = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modaleServizi', size: 'lg', centered: true}).result.then((res) => {
      this.form.reset()
    }).catch((res) => {
      this.router.navigate(['viaggi'])
    });
  }
}

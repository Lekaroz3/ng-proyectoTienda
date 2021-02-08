import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Zapatilla } from '../shared/zapatilla';
import { ZapatillaService } from '../shared/zapatilla.service';

@Component({
  selector: 'app-zapatilla-new',
  templateUrl: './zapatilla-new.component.html',
  styleUrls: ['./zapatilla-new.component.scss']
})
export class ZapatillaNewComponent implements OnInit {

  pageTitle = 'Nueva Zapatilla';
  errorMessage: string;
  zapatillaForm: FormGroup;

  zapaId:number;
  zapatilla:Zapatilla;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private zapatillaService: ZapatillaService) { }

  ngOnInit(): void {
    this.zapatillaForm = this.fb.group({
      nombre:'',
      precio:'',
      descripcion:'',
      urlImagen:''
    });

    this.zapaId = parseInt(this.activatedroute.snapshot.params['zapatillaId']);
  }

  saveZapatilla(): void{
    if (this.zapatillaForm.valid){
      if(this.zapatillaForm.dirty){
        this.zapatilla = this.zapatillaForm.value;
        this.zapatilla.id = this.zapaId;

        this.zapatillaService.createZapatilla(this.zapatilla)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
        );
      } else{
        this.onSaveComplete();
      }
    } else{
      this.errorMessage = 'Corrige las validaciones!'
    }
  }

  onSaveComplete():void{
    this.zapatillaForm.reset();
    this.router.navigate(['']);
  }

}

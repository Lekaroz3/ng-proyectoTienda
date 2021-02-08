import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Zapatilla } from '../shared/zapatilla';
import { ZapatillaService } from '../shared/zapatilla.service';

@Component({
  selector: 'app-zapatilla-edit',
  templateUrl: './zapatilla-edit.component.html',
  styleUrls: ['./zapatilla-edit.component.scss']
})
export class ZapatillaEditComponent implements OnInit {

  pageTitle = 'Editando zapatilla';
  errorMessage:string;
  zapatillaForm: FormGroup;

  zapaId:number;
  zapatilla:Zapatilla;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private zapatillaService:ZapatillaService) { }

  ngOnInit(): void {
    this.zapatillaForm = this.fb.group({
      nombre:'',
      precio:'',
      descripcion:'',
      urlImagen:''
    });

    this.zapaId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.zapatillaService.getZapatillaById(this.zapaId)
    .subscribe(
      (zapa:Zapatilla) => this.displayZapatilla(zapa),
      (error:any) => this.errorMessage = <any>error
    );
  }

  displayZapatilla(zapatilla:Zapatilla):void{
    if(this.zapatillaForm){
      this.zapatillaForm.reset();
    }
    this.zapatilla = zapatilla;
    this.pageTitle = `Editando Zapatilla ${zapatilla.nombre}`;
    this.zapatillaForm.patchValue({
      nombre:this.zapatilla.nombre,
      precio:this.zapatilla.precio,
      descripcion:this.zapatilla.descripcion,
      urlImagen:this.zapatilla.urlImagen
    })
  }

  saveZapatilla():void{
    if(this.zapatillaForm.valid){
      if(this.zapatillaForm.dirty){
        this.zapatilla = this.zapatillaForm.value;
        this.zapatilla.id = this.zapaId;
        
        this.zapatillaService.updateZapatilla(this.zapatilla)
        .subscribe(
          () => this.onSaveComplete(),
          (error:any) => this.errorMessage = <any>error
        );
      } else{
        this.onSaveComplete();
      } 
    } else{
      this.errorMessage = 'Corrige los errores de validacion';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.zapatillaForm.reset();
    this.router.navigate(['']);
  }

}

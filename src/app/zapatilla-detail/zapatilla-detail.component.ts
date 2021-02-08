import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zapatilla } from '../shared/zapatilla';
import { ZapatillaService } from '../shared/zapatilla.service';

@Component({
  selector: 'app-zapatilla-detail',
  templateUrl: './zapatilla-detail.component.html',
  styleUrls: ['./zapatilla-detail.component.scss']
})
export class ZapatillaDetailComponent implements OnInit {
  zapatilla: Zapatilla;
  zapaId: number;
  errorMessage:string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private zapatillaService: ZapatillaService) { }

  ngOnInit(): void {
    this.zapaId = parseInt(this.activatedRoute.snapshot.params['zapatillaId']);
    this.zapatillaService.getZapatillaById(this.zapaId).subscribe(
      (data:Zapatilla) => this.zapatilla = data
    );
  }
  deleteZapatilla():void{
    this.zapatillaService.deleteZapatilla(this.zapaId)
    .subscribe(
      () => this.router.navigate(['']),
      (error: any) => this.errorMessage = <any>error
    );
    
  }

  goEdit():void{
    this.router.navigate(['/zapatillas',this.zapaId,'edit']);
  }

  goBack():void{
    this.router.navigate(['']);
  }

}

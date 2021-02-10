import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zapatilla } from '../shared/zapatilla';
import { ZapatillaService } from '../shared/zapatilla.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id:any;
  zapatillas: Zapatilla[] = [];
  constructor(private zapatillaService:ZapatillaService, private router: Router) { }

  ngOnInit(): void {
    this.zapatillaService.getZapatillas().subscribe(
      (data: Zapatilla[]) => this.zapatillas =data
    )
  }

  newZapatilla(){
    this.zapatillaService.getMaxZapatillasId().subscribe(
      data => this.id = data
    );
    this.router.navigate(['/zapatillas', this.id,'new'])
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Zapatilla } from '../shared/zapatilla';

@Component({
  selector: 'app-zapatilla-item',
  templateUrl: './zapatilla-item.component.html',
  styleUrls: ['./zapatilla-item.component.scss']
})
export class ZapatillaItemComponent {

  @Input() zapatilla:Zapatilla;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillaItemComponent } from './zapatilla-item.component';

describe('ZapatillaItemComponent', () => {
  let component: ZapatillaItemComponent;
  let fixture: ComponentFixture<ZapatillaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatillaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillaEditComponent } from './zapatilla-edit.component';

describe('ZapatillaEditComponent', () => {
  let component: ZapatillaEditComponent;
  let fixture: ComponentFixture<ZapatillaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatillaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

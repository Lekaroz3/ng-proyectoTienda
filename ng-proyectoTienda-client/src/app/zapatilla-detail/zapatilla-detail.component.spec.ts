import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillaDetailComponent } from './zapatilla-detail.component';

describe('ZapatillaDetailComponent', () => {
  let component: ZapatillaDetailComponent;
  let fixture: ComponentFixture<ZapatillaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatillaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

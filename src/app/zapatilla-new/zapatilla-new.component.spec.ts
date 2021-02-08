import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillaNewComponent } from './zapatilla-new.component';

describe('ZapatillaNewComponent', () => {
  let component: ZapatillaNewComponent;
  let fixture: ComponentFixture<ZapatillaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatillaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

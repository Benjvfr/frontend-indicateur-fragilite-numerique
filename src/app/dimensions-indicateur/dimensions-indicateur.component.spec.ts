import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionsIndicateurComponent } from './dimensions-indicateur.component';

describe('DimensionsIndicateurComponent', () => {
  let component: DimensionsIndicateurComponent;
  let fixture: ComponentFixture<DimensionsIndicateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionsIndicateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionsIndicateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

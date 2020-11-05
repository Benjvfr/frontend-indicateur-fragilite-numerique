import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilRechercheComponent } from './outil-recherche.component';

describe('OutilRechercheComponent', () => {
  let component: OutilRechercheComponent;
  let fixture: ComponentFixture<OutilRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutilRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutilRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

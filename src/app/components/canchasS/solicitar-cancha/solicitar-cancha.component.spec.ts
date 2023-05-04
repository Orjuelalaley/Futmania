import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCanchaComponent } from './solicitar-cancha.component';

describe('SolicitarCanchaComponent', () => {
  let component: SolicitarCanchaComponent;
  let fixture: ComponentFixture<SolicitarCanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarCanchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

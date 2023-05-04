import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCanchaComponent } from './registrar-cancha.component';

describe('RegistrarCanchaComponent', () => {
  let component: RegistrarCanchaComponent;
  let fixture: ComponentFixture<RegistrarCanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCanchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

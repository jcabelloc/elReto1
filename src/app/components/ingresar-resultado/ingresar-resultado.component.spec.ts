import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarResultadoComponent } from './ingresar-resultado.component';

describe('IngresarResultadoComponent', () => {
  let component: IngresarResultadoComponent;
  let fixture: ComponentFixture<IngresarResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

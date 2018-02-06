import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoJugadoComponent } from './reto-jugado.component';

describe('RetoJugadoComponent', () => {
  let component: RetoJugadoComponent;
  let fixture: ComponentFixture<RetoJugadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoJugadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoJugadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

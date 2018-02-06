import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoPactadoComponent } from './reto-pactado.component';

describe('RetoPactadoComponent', () => {
  let component: RetoPactadoComponent;
  let fixture: ComponentFixture<RetoPactadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoPactadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoPactadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

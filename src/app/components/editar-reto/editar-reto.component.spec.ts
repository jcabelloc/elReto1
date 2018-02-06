import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRetoComponent } from './editar-reto.component';

describe('EditarRetoComponent', () => {
  let component: EditarRetoComponent;
  let fixture: ComponentFixture<EditarRetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRetoComponent } from './nuevo-reto.component';

describe('NuevoRetoComponent', () => {
  let component: NuevoRetoComponent;
  let fixture: ComponentFixture<NuevoRetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoRetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoRetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

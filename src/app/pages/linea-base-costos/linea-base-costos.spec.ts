import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaBaseCostos } from './linea-base-costos';

describe('LineaBaseCostos', () => {
  let component: LineaBaseCostos;
  let fixture: ComponentFixture<LineaBaseCostos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineaBaseCostos],
    }).compileComponents();

    fixture = TestBed.createComponent(LineaBaseCostos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorCycleSellComponent } from './motor-cycle-sell.component';

describe('MotorCycleSellComponent', () => {
  let component: MotorCycleSellComponent;
  let fixture: ComponentFixture<MotorCycleSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorCycleSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorCycleSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySellComponent } from './property-sell.component';

describe('PropertySellComponent', () => {
  let component: PropertySellComponent;
  let fixture: ComponentFixture<PropertySellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

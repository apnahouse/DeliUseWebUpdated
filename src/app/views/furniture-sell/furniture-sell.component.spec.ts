import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureSellComponent } from './furniture-sell.component';

describe('FurnitureSellComponent', () => {
  let component: FurnitureSellComponent;
  let fixture: ComponentFixture<FurnitureSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSellComponent } from './mobile-sell.component';

describe('MobileSellComponent', () => {
  let component: MobileSellComponent;
  let fixture: ComponentFixture<MobileSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsSellComponent } from './electronics-sell.component';

describe('ElectronicsSellComponent', () => {
  let component: ElectronicsSellComponent;
  let fixture: ComponentFixture<ElectronicsSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

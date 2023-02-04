import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCategoryComponent } from './sell-category.component';

describe('SellCategoryComponent', () => {
  let component: SellCategoryComponent;
  let fixture: ComponentFixture<SellCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

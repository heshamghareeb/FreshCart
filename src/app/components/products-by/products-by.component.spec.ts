import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByComponent } from './products-by.component';

describe('ProductsByComponent', () => {
  let component: ProductsByComponent;
  let fixture: ComponentFixture<ProductsByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsByComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

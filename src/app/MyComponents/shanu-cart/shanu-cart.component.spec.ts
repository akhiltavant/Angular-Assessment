import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanuCartComponent } from './shanu-cart.component';

describe('ShanuCartComponent', () => {
  let component: ShanuCartComponent;
  let fixture: ComponentFixture<ShanuCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShanuCartComponent]
    });
    fixture = TestBed.createComponent(ShanuCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

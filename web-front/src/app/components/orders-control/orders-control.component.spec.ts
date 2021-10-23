import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersControlComponent } from './orders-control.component';

describe('OrdersControlComponent', () => {
  let component: OrdersControlComponent;
  let fixture: ComponentFixture<OrdersControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

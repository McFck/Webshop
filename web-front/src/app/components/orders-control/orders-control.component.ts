import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderResponse } from 'src/app/services/OrderResponse';

@Component({
  selector: 'app-orders-control',
  templateUrl: './orders-control.component.html',
  styleUrls: ['./orders-control.component.css']
})
export class OrdersControlComponent implements OnInit {

  constructor(private ordersService: OrderService) { 
    this.items = [{
      contactNumber: "",
      dateCreated: "",
      id: -1,
      numberOfItems: 0,
      orderItems: [],
      status: "",
      totalOrderPrice: 0,
    }];
  }
  items: OrderResponse[];
  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.ordersService.getOrders().subscribe((item: OrderResponse[]) => {
      this.items = item;
      console.log(this.items);
    })
  }

}

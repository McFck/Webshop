import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { OrderResponse } from 'src/app/services/OrderResponse';

interface tableOrder extends OrderResponse {
  isExpanded: boolean;
}

@Component({
  selector: 'app-orders-control',
  templateUrl: './orders-control.component.html',
  styleUrls: ['./orders-control.component.css']
})
export class OrdersControlComponent implements OnInit {
  items: tableOrder[];

  constructor(private ordersService: OrderService, private router:Router) {
    this.items = [{
      contactNumber: "",
      dateCreated: "",
      id: -1,
      numberOfItems: 0,
      orderItems: [],
      status: "",
      totalOrderPrice: 0,
      isExpanded: false
    }];
  }
  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.ordersService.getOrders().subscribe((item: OrderResponse[]) => {
      this.items = [];
      item.forEach(value => {
        this.items.push({
          contactNumber: value.contactNumber,
          dateCreated: value.dateCreated,
          id: value.id,
          numberOfItems: value.numberOfItems,
          orderItems: value.orderItems,
          status: value.status,
          totalOrderPrice: value.totalOrderPrice,
          isExpanded: false
        })
      })
    })
  }

  updateStatusHandle(item: OrderResponse){
    var orderedItems: Item[] = [];
    item.orderItems.forEach(x=>{
      orderedItems.push(x.item);
    });
    this.ordersService.updateStatus(new Order(item.id,item.dateCreated, item.status, orderedItems,item.contactNumber)).subscribe(x=>{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['orders-control']));
    });
  }
}

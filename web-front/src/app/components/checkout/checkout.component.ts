import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { CartItem } from 'src/app/models/cart-item';
import { CheckoutItem } from 'src/app/models/checkout-item';
import { Item } from 'src/app/models/item';
import { OrderItem } from 'src/app/models/order-item';
import { ItemService } from 'src/app/services/item.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private router: Router, private msg: MessengerService, private orderService: OrderService, private itemService: ItemService) { }
  checkoutItems: CartItem[] = [];
  total: number = 0;

  ngOnInit(): void {
    if (this.msg.valueObs.value['type'] === 'checkout') {
      this.checkoutItems = this.msg.valueObs.value['items'];
      for (const value of this.checkoutItems) {
        this.total += value.price * value.qty;
      }
    }
  }

  checkoutHandle() {
    var inputValue = (<HTMLInputElement>document.getElementById("mobile")).value;
    const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (regex.test(inputValue)) {
      this.fileOrder(inputValue);
      this.router.navigate(['/checkout-success'])
    } else {
      alert("Не правильный формат номера телефона");
    }
  }

  async fileOrder(contact: string) {
    const t = await this.itemService.getItems().toPromise();
    var api: Item[] = t;
    var result = [];
    for (var i = 0; i < this.checkoutItems.length; i++) {
      for (var j = 0; j < api.length; j++) {
        if (this.checkoutItems[i].itemId === api[j].id) {
          result.push(new CheckoutItem(api[j], this.checkoutItems[i].qty));
          break;
        }
      }
    }
    var order = new OrderItem(result, contact);
    this.orderService.postData(order).subscribe();
  }

}

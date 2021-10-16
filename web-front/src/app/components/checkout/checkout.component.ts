import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Subscription } from 'rxjs';
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
  constructor(private router: Router, private msg: MessengerService, private orderService: OrderService, private itemService: ItemService) {}
  checkoutItems: CartItem[] =[];
  apiItems: Item[]=[];
  total: number = 0;

  ngOnInit(): void {
    if(this.msg.valueObs.value['type'] === 'checkout'){
      this.checkoutItems = this.msg.valueObs.value['items'];
      for(const value of this.checkoutItems){
        this.total+=value.price * value.qty;
      }
    }
  }

  checkoutHandle(){
    var inputValue = (<HTMLInputElement>document.getElementById("mobile")).value;
    const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if(regex.test(inputValue)){
      var checkoutItemsArray = this.generateOrderItems();
      var order = new OrderItem(checkoutItemsArray);
      this.orderService.postData(order);
      this.router.navigate(['/checkout-success'])
    } else {
      alert("Не правильный формат номера телефона");
    }
  }

  

  generateOrderItems() : CheckoutItem[] {
    var result : CheckoutItem[] = [];
    var api : Item[] = [];
    var obs = this.itemService.getItems();
    console.log("API:" + api.length);
    for(var i = 0; i < this.checkoutItems.length; i++){
      for(var j =0; j< api.length; j++){
        if(this.checkoutItems[i].itemId === api[j].id){
          console.log("ADDING ITEM" + this.checkoutItems[i].title);
          result.push(new CheckoutItem(api[j],this.checkoutItems[i].qty));
          break;
        }
      }
    }
    return result;
  }

}

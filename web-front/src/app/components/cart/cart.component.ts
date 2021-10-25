import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Item } from 'src/app/models/item';
import { MessengerService } from 'src/app/services/messenger.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [
  ];

  cartTotal = 0

  constructor(private msg: MessengerService, private router: Router) { }

  ngOnInit() {
    this.msg.subs.push(
      this.msg.getMsg().subscribe((item: any) => {
        if (item.id === undefined && item['type'] === undefined) {
          this.removeItemFromCart(item);
        } else if (item.id != undefined) {
          this.addItemToCart(item);
        }
      })
    );
  }

  ngOnDestroy(){
    this.msg.subs.forEach(n=>{
      n.unsubscribe();
    })
  }

  removeItemFromCart(cartItem: CartItem) {
    if (cartItem.qty > 1) {
      cartItem.qty--;
    } else {
      this.cartItems = this.cartItems.filter(item => item !== cartItem);
    }

    this.calculateCartTotal();
  }

  addItemToCart(item: Item) {

    let itemExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].itemId === item.id) {
        this.cartItems[i].qty++;
        itemExists = true;
        break;
      }
    }

    if (!itemExists) {
      this.cartItems.push({
        itemId: item.id,
        title: item.name,
        qty: 1,
        price: item.price
      })
    }

    this.calculateCartTotal();
  }

  calculateCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  handleMoveToCheckOut() {
    this.msg.setValue({ items: this.cartItems, type: 'checkout' });
    this.router.navigate(['/checkout'])
  }
}

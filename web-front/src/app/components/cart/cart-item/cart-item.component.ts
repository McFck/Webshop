import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  @Input() isDeletable : boolean = false;
  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleRemoveFromCart(){
    this.msg.sendMsg(this.cartItem);
  }

}

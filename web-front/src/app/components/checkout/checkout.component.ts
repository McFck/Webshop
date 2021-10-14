import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router, private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((item) => {
      if(item['type'] === 'checkout'){
        console.log(item);
      }
    })
  }

  checkoutHandle(){
    var inputValue = (<HTMLInputElement>document.getElementById("mobile")).value;
    const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if(regex.test(inputValue)){
      this.router.navigate(['/checkout-success'])
    } else {
      alert("Не правильный формат номера телефона");
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  itemObject!: Item;

  isHidden = false;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.itemObject)
  }

  handleViewMore(){
    this.isHidden= !this.isHidden;
  }

}

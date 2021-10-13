import { Item } from './item';

export class CartItem {
  //id: number;
  itemId: number;
  title: string;
  qty: number;
  price: number;

  constructor(item: Item, qty = 1) { //id: number, 
    //this.id = id;
    this.itemId = item.id;
    this.title = item.name;
    this.price = item.price;
    this.qty = qty;
  }
}
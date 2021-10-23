import { Item } from "./item";

export class Order {
    public id: number;
    public date: string;
    public status: string;
    public orderedItems: Item[];
    public contact: string;

    constructor(id: number, date: string, status: string, orderedItems: Item[], contact : string){
        this.id = id;
        this.date = date;
        this.status = status;
        this.orderedItems = orderedItems;
        this.contact = contact;
    }
}

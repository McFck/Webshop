import { Item } from "./item";

export class Order {
    public id: number;
    public dateCreated: string;
    public status: string;
    public orderedItems: Item[];
    public contactNumber: string;

    constructor(id: number, date: string, status: string, orderedItems: Item[], contact : string){
        this.id = id;
        this.dateCreated = date;
        this.status = status;
        this.orderedItems = orderedItems;
        this.contactNumber = contact;
    }
}

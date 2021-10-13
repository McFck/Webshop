export class Item {
    id: number;
    name: string;
    pictureUrl: string;
    price: number;
    description: string;

    constructor(id: number, name: string, price: number = 0, description : string = "Описание отсутствует", pictureUrl: string = "https://i.imgur.com/8UdKNS4.jpeg") {
        this.id = id;
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.price = price;
        this.description = description;
    }
}

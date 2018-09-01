import { DateTime } from "ionic-angular/umd";
import { HttpHeaders } from "@angular/common/http";

export class Poll {
    id: string;
    title: string;
    createDate: DateTime;
    createBy: string;
    closePollDate: DateTime;
    selectedShopId: string;
    selectedShopName: string;
    orders: Order[];
}

export class Order {
    id: string;
    userId: string;
    menuId: string;
    count: string;
}

export class Shop {
    id: string;
    name: string;
    imageUrl: string;
    createDate: DateTime;
    createBy: string;
    defaultMenuId: string;
    menues: Menu[];
}

export class Menu {
    id: string;
    name: string;
    createDate: DateTime;
    createBy: string;
    voterCount: number;
}

export class User {
    id: string;
    username: string;
    displayName: string;
}

export class PollWithMenu extends Poll {
    menues: Menu[];
}

export class UserWithMenu extends User {
    menuName: string;
}

export class RequestResponse {
    code: number;
    message: number;
}

export class GlobalVarible {
    static host: string = "http://lunch-order-api.azurewebsites.net";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    static User: User;
}
import {Shopping} from "../../shop/cashier-opened/shopping-cart/shopping.model";

export class ShoppingCart {
  id: string;
  shoppingItems: Shopping[]

  constructor() {
    this.shoppingItems = [];
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: any = [];
  productList = new BehaviorSubject([]);
  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(): number {
    let grandtotal = 0;
    this.cartItemList.map(
      (item: any) => {
        grandtotal += item.total
      }
    )
    return grandtotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((item: any, index: number) => {
      if (product.id === item.id) {
         this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.productList.next(this.cartItemList)

  }
}

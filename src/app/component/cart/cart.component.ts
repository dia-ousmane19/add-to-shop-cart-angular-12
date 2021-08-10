import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products!: any;
  grandtotal!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(
      (response: any) => {
        this.products = response;
        this.grandtotal = this.cartService.getTotalPrice();
       // console.log(this.grandtotal);
      }
    )
  }

  removeItem(product: any) {
    this.cartService.removeCartItem(product);
  }

  emptyCart(){
    this.cartService.removeAllCart();

  }

}

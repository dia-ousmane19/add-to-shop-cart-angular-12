import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList!: any;
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (response: any) => {
        this.productList = response;
       
        this.productList.forEach((item: any) => {
          
        Object.assign(item, { quantity: 1, total: item.price });
       

        })
      }
    )
  }

  addtocart(item: any) {
    this.cartService.addToCart(item);
  }



}

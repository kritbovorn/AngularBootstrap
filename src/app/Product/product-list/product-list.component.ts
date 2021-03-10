import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../product'

import { ProductItemComponent } from './../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  @ViewChildren(ProductItemComponent)
  productItems!: QueryList<ProductItemComponent>;

  constructor() { 

    this.products = [];
  }

  ngOnInit(): void {
  }

  selectedProduct(productComponent: ProductItemComponent) {
    
    alert(`Product ที่ท่านเลือก คือ: ${productComponent.product.name} มีราคา อยู่ที่ : ${productComponent.product.price} บาท.`);

    this.productItems.forEach(p => {
      p.isSelected = false
    });
    
    productComponent.isSelected = true;

  }

}

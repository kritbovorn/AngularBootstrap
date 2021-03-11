import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];

  constructor() { 
    this.products?.push(
      {
        name: "ส้มโอ",
        price: 990
      },
      {
        name: "แตงโม",
        price: 990
      },
      {
        name: "มะพร้าวน้ำหอม",
        price: 500  
      }
    );
  }

  ngOnInit(): void {
  }

}

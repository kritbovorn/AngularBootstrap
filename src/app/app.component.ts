import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './Product/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularBootstrap';

  @ViewChild('productList')
  productList: ProductListComponent = new ProductListComponent();

  ngOnInit(): void {

    
  }

  ngAfterViewInit(): void {
    
    this.productList.products = [
      {
        name: "ส้มโอ",
        price: 111
      },
      {
        name: "แตงโม",
        price: 222
      },
      {
        name: "มะพร้าวน้ำหอม",
        price: 333
      }
    ];
    
  }
}

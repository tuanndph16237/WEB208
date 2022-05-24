import { Component } from '@angular/core';
import { IProduct } from './models/product';
import data from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WEB208';
  productList: IProduct[] = data;

  onHandleAdd(product: any) {
    console.log(product);
    this.productList.push(product);
  }
}

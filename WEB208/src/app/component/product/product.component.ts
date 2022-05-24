
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './../../models/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: IProduct[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.productService.getProductList().subscribe(data =>{
      this.products = data;
    })
  }

}

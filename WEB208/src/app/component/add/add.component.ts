import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {IProduct} from "../../models/product"
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: { name: string, price: number } = {
    name: "",
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('submitted!')
    console.log(this.product);
    this.createProduct.emit(this.product);
  }
}

import { IProduct } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  //@Input() product!: IProduct
  product!: IProduct
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    //this.product = this.productService.getProduct(id)!;
    this.productService.getProduct(id).subscribe((data)=>{
      this.product = data
    })
  }

  ngOnInit(): void {
  }

}

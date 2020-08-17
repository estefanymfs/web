import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ProductService } from '../../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  filterPost='';
  products:any[];

  constructor(private router: Router,
    private productService: ProductService){}
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe(
      res => {
        this.products= res.products;
        console.log(res.products)
      },
      err => console.log(err)
    )
  }

  goToBuy(id: string){
    this.router.navigate(['compra'], { queryParams: { id } });
  }

}

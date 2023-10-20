import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productsArray:any[] = [];
  categories:any[] =[];

  constructor(private producctSrv : ProductService){

  }
  ngOnInit(): void {
    this.loadProducts();
    this.loadCategory();

  }
  loadProducts(){
    this.producctSrv.grtAllProducts().subscribe((Res : any)=> {
      this.productsArray =Res.data;

    })
  }
  loadCategory(){
    this.producctSrv.getAllcategory().subscribe((Res : any)=> {
      this.categories =Res.data;

    })
  }

}

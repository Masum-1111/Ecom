import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  grtAllProducts(): Observable <any[]> {

    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts")

  }
  getAllcategory(){
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/amazon/GetAllCategory")
  }

  getJsonData(){
    return this.http.get('.assets/products.json')
  }
}

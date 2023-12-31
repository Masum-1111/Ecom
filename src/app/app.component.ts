import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ecom';

  constructor(private protectService : ProductService){

    this.protectService. getJsonData().subscribe((res :any)=>{
      alert(JSON.stringify(res));

    });
    
  }
}

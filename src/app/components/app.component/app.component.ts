import { Component } from '@angular/core';
import { Router }  from '@angular/router'; 

import { IProduct } from '../../../app/common-interfaces/products';
import { ProductService } from '../../../app/services/products.service';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `<div class="container">
  <div class="jumbotron">
    <h1>Angular 4 </h1> 
    <p>Angular is the most popular HTML, CSS, and JS framework for developing dynamic application.</p> 
  </div>
  <p>This is some text.</p> 
  <p>This is another text.</p> 
</div><a class="button" (click)="onBack()">back to product</a>
            <ul>
                <li><a [routerLink] = "['/Product']">Product</a></li>
                <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
            </ul>
            <router-outlet></router-outlet><h3>Best Luck</h3>`,
  providers : [ProductService]    
})

export class AppComponent  { 
    iproduct : IProduct[];

    constructor(private _product : ProductService, private _router : Router){}
    
    ngOnInit() : void {
        this._product.getproducts()
        .subscribe(iproducts => this.iproduct = iproducts);
    }
   
   onBack() : void{
       this._router.navigate(['/Product']);
   }    
}

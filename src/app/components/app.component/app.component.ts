import { Component } from '@angular/core';
import { IProduct } from '../../../app/common-interfaces/products';
import { ProductService } from '../../../app/services/products.service';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <ul>
                <li><a [routerLink] = "['/Product']">Product</a></li>
                <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
            </ul>
            <router-outlet></router-outlet><h3>Best Luck</h3>`,
  providers : [ProductService]    
})

export class AppComponent  { 
    debugger;
    name = 'World - Kiran'; 
    iproduct : IProduct[];

    constructor(private _product : ProductService){}
    
    ngOnInit() : void {
        this._product.getproducts()
        .subscribe(iproducts => this.iproduct = iproducts);
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from '../../../app/common-interfaces/product/products';
import { ProductService } from '../../../app/services/product/products.service';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    templateUrl: `../../../components/app.component/app.component.html`,
    styleUrls: ['../../../components/app.component/app.component.css'],
    providers: [ProductService]
})

export class AppComponent {
    iproduct: IProduct[];

    constructor(private _product: ProductService, private _router: Router) { }

    ngOnInit(): void {
        this._product.getproducts()
            .subscribe(iproducts => this.iproduct = iproducts);
    }

    onBack(): void {
        this._router.navigate(['/Product']);
    }
}

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MultiperPipe } from './filteres/multiplier/multiplier';
import { AppComponent }  from './components/app.component/app.component';
import { AppProduct } from './components/product.component/product.component';
import { AppInventory } from './components/inventory.component/inventory.component';
import { PageNotFoundComponent } from './components/pageNotFound.component/pageNotFound.component';

const appRoutes : Routes = [
    {path: 'Product', component: AppProduct},
    {path: 'Inventory', component: AppInventory },
    {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, AppProduct, AppInventory, PageNotFoundComponent, MultiperPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

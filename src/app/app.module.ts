import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MultiperPipe } from './filteres/multiplier/multiplier';
import { AppComponent }  from './components/app.component/app.component';
import { contactComponent } from './components/contact.component/contact.component';
import { aboutComponent } from './components/about.component/about.component';
import { PageNotFoundComponent } from './components/pageNotFound.component/pageNotFound.component';
import { headerComponent } from './components/header.component/header.component';
import { footerComponent } from './components/footer.component/footer.component';
import { cardComponent } from './components/card.component/card.component';
import { carouselComponent } from './components/carousel.component/carousel.component';
import { homePageComponent  } from './components/home-page.component/home-page.component';
import { itemReviewComponent  } from './components/item-review.component/item-review.component';

const appRoutes : Routes = [
    {path: 'home', component: homePageComponent},
    {path: 'About', component: aboutComponent},
    {path: 'Contact', component: contactComponent },
    {path: 'itemReview/:productId', component: itemReviewComponent },
    {path: '**', component: homePageComponent }
];

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, aboutComponent, contactComponent, PageNotFoundComponent, MultiperPipe, headerComponent, footerComponent, homePageComponent, cardComponent, carouselComponent, itemReviewComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

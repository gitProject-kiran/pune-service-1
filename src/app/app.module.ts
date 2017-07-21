import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { MultiperPipe } from './filteres/multiplier/multiplier';
import { AppComponent } from './components/app.component/app.component';
import { contactComponent } from './components/contact.component/contact.component';
import { aboutComponent } from './components/about.component/about.component';
import { PageNotFoundComponent } from './components/pageNotFound.component/pageNotFound.component';
import { headerComponent } from './components/header.component/header.component';
import { footerComponent } from './components/footer.component/footer.component';
import { homePageModule } from './modules/home-page.module/home-page.module';
import { itemReviewComponent } from './components/item-review.component/item-review.component';

const appRoutes: Routes = [
  { path: 'About', component: aboutComponent },
  { path: 'Contact', component: contactComponent },
  { path: 'itemReview/:productId', component: itemReviewComponent },
  { path: 'home', loadChildren: '../app/modules/home-page.module/home-page.module#homePageModule' },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [FormsModule, BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, aboutComponent, contactComponent, PageNotFoundComponent, MultiperPipe, headerComponent, footerComponent, itemReviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

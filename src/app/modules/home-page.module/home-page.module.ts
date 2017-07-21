import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { homePageRoutingModule } from './home-page-routing.module';

import { cardComponent } from '../../components/card.component/card.component';
import { carouselComponent } from '../../components/carousel.component/carousel.component';
import { homePageComponent } from '../../components/home-page.component/home-page.component';

@NgModule({
    imports: [CommonModule, homePageRoutingModule],
    declarations: [homePageComponent, cardComponent, carouselComponent],
    exports: [homePageComponent, cardComponent, carouselComponent]
})


export class homePageModule { }

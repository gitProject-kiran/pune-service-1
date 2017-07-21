import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { homePageComponent } from '../../components/home-page.component/home-page.component';

const homePageRoutes: Routes = [
    { path: '', component: homePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(homePageRoutes)],
  exports: [RouterModule]
})
export class homePageRoutingModule {}
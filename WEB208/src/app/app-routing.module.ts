import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './component/hello/hello.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { AboutComponent } from './component/about/about.component';
import { PagesComponent } from './component/pages/pages.component';
import { DetailComponent } from './component/detail/detail.component';
import { AddComponent } from './component/add/add.component';

import { EditComponent } from './component/edit/edit.component';
import { ManagerComponent } from './component/manager/manager.component';
import { NavLinkComponent } from './component/nav-link/nav-link.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
const routes: Routes = [
  {path:'hello', component: HelloComponent},
  {path:'home', component: HomeComponent},
  {path:'product', component: ProductComponent},
  {path:'about', component: AboutComponent},
  {path:'pages', component: PagesComponent},
  {path:'product/:id', component: DetailComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component: EditComponent},
  {path:'manager', component: ManagerComponent},
  {path:'navlink', component: NavLinkComponent},
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

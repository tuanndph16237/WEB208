

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { AboutComponent } from './component/about/about.component';
import { PagesComponent } from './component/pages/pages.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './component/detail/detail.component';
import { AddComponent } from './component/add/add.component';

import { EditComponent } from './component/edit/edit.component';
import { ManagerComponent } from './component/manager/manager.component';
import { NavLinkComponent } from './component/nav-link/nav-link.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RouterComponent } from './component/router/router.component';
import { RemoveComponent } from './component/remove/remove.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PagesComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    DetailComponent,
    AddComponent,
    EditComponent,
    ManagerComponent,
    NavLinkComponent,
    DashboardComponent,
    RouterComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

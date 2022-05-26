

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import { AboutComponent } from './component/about/about.component';
import { ProductComponent } from './component/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

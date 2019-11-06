import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { auth } from 'firebase';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'Products',component: ProductsComponent },
      {path:'shopping-cart',component: ShoppingCartComponent },
      {path:'check-out',component: CheckOutComponent },
      {path:'order-success',component: OrderSuccessComponent },
      {path:'my-orders', component:MyOrdersComponent},
      {path:'login',component: LoginComponent },
      {path:'admin/products',component: AdminProductsComponent },
      {path:'admin/orders',component: AdminOrdersComponent }
    ])
  ],
  providers: [
    AuthService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

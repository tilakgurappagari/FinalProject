import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent ,canActivate: [AuthGuard] },
  {path: 'categories',component:CategoriesComponent ,canActivate: [AuthGuard]},
  {path:'products', component:ProductsComponent ,canActivate: [AuthGuard]},
  {path:'cart', component:CartComponent ,canActivate: [AuthGuard]},
  {path:'checkout', component:CheckoutComponent ,canActivate: [AuthGuard]},
  {path:'orders', component:OrdersComponent ,canActivate: [AuthGuard]},
  {path:'admin/add-new-product', component:AddNewProductComponent ,canActivate: [AuthGuard]},
  {path:'admin/products', component:ManageProductsComponent ,canActivate: [AuthGuard]},
  {path:'admin/orders', component:ManageOrdersComponent ,canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

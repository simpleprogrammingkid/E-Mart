import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CartComponent } from './cart/cart.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import {RegisterScreenComponent} from './register-screen/register-screen.component';
const routes: Routes = [
  {
    path: 'heroes', component: HeroesComponent
  },
  { 
    path: 'dashboard', component: DashboardComponent 
  },
  
  { 
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
   },
   
  
   { 
     path: 'detail/:id', component: HeroDetailComponent 
    },
   {
     path: 'cart', component: CartComponent
   },
   {
     path: 'login_screen', component: LoginScreenComponent
   },
   {
    path: 'register_screen', component: RegisterScreenComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

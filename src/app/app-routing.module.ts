import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componants/about/about.component';
import { CartComponent } from './componants/cart/cart.component';
import { ContactComponent } from './componants/contact/contact.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { NotfoundComponent } from './componants/notfound/notfound.component';
import { PaymentComponent } from './componants/payment/payment.component';
import { RegisterComponent } from './componants/register/register.component';
import { ServiceItemComponent } from './componants/service-item/service-item.component';
import { ServiceComponent } from './componants/service/service.component';
import { BookingComponent } from './componants/booking/booking.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'service-item', component: ServiceItemComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

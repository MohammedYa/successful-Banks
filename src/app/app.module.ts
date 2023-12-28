import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componants/login/login.component';
import { NotfoundComponent } from './componants/notfound/notfound.component';
import { RegisterComponent } from './componants/register/register.component';
import { HomeComponent } from './componants/home/home.component';
import { AboutComponent } from './componants/about/about.component';
import { ContactComponent } from './componants/contact/contact.component';
import { ServiceItemComponent } from './componants/service-item/service-item.component';
import { PaymentComponent } from './componants/payment/payment.component';
import { CartComponent } from './componants/cart/cart.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { FooterComponent } from './componants/footer/footer.component';
import { BookingComponent } from './componants/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceItemComponent,
    PaymentComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

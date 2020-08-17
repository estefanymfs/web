import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { OfertaComponent } from './components/ofertas/ofertas.component';
import { AboutComponent } from './components/about/about.component';
import {PopupModule} from 'ng2-opd-popup';
//Rutas

import { app_routing } from './app.routes';
//Servicios
import { ProductService} from './service/products.service';
import { OfertaService } from './service/ofertas.service';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderService } from './service/slider.service';
import { ModalComponent } from './components/modal/modal.component';
import { RegistroComponent } from './components/registro/registro.component';

// import { MatSliderModule } from '@angular/material/slider';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StripeComponent } from './components/stripe/stripe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProductComponent,
    OfertaComponent,
    AboutComponent,
    HomeComponent,
    SliderComponent,
    ModalComponent,
    RegistroComponent,
    FilterPipe,
    StripeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    app_routing,
    HttpClientModule
  ],
  providers: [
    OfertaService,
    SliderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

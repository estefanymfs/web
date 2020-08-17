import { RouterModule , Routes} from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { StripeComponent } from './components/stripe/stripe.component';

const APP_ROUTING: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'product', component: ProductComponent},
    { path: 'about', component: AboutComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'compra', component: StripeComponent},
    {path:'**', pathMatch:'full',redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(APP_ROUTING);


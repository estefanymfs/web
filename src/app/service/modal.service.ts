import { LoginComponent } from '../components/login/login.component';
import { Inject } from '@angular/core';


@Inject({
    providedIn: 'root'
})
export class ModalService{
    public login: LoginComponent;
}
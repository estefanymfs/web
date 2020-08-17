import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  public showLogin(){
    
  }

}

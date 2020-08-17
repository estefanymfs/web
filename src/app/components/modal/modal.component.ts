import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modal: NgModule) { }

  ngOnInit() {
  }
  // openSM(login){
  //   this.modal.open(login);
  // }

}

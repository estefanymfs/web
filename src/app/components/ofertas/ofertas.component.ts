import { Component, OnInit } from '@angular/core';
import { OfertaService, Oferta } from '../../service/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: []
})
export class OfertaComponent implements OnInit {

  ofertas:Oferta[] = [];

  constructor( private _ofertasService:OfertaService) { }

  ngOnInit() {
    this.ofertas = this._ofertasService.getOfertas();
    console.log(this.ofertas);
  }
}

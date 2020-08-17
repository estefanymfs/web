import {Injectable} from '@angular/core';

@Injectable()
export class OfertaService {

private oferta:Oferta[]= [
    {
        img:"assets/img/audifonos.png"
    },
    {
        img:"assets/img/mouse.png"
        
    },
    {
        img:"assets/img/laptop.png"
    },
    {
        img:"assets/img/parlante.png"
    },
    {
        img:"assets/img/tablet.png"
    },
    {
        img:"assets/img/celulares.png"
    },
];



    constructor(){
        console.log("listo");

    }

    getOfertas(): Oferta[]{
        return this.oferta;
    }
}
export interface Oferta{
    img: string;
}
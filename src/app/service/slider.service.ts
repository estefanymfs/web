import {Injectable} from '@angular/core';

@Injectable()
export class SliderService {

private slider:Slider[]= [
   
];
    constructor(){
        console.log("listo");

    }

    getSlider(): Slider[]{
        return this.slider;
    }
}
export interface Slider{
    img: string;
    nombre: string;
}
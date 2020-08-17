import { Component, OnInit } from '@angular/core';
import { SliderService, Slider } from '../../service/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders:Slider[] = [];

  constructor( private _slidersService:SliderService) { }

  ngOnInit() {
    this.sliders = this._slidersService.getSlider();
    console.log(this.sliders);
  }
}

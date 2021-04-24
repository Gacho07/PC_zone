import { paths } from './../paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private service: HttpClient) { }

  getSlider() {
    return this.service.get(paths.slider);
  }
}

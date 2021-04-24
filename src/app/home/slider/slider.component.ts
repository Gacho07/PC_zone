import { Slider } from './../../slider';
import { SliderService } from './../../services/slider.service';
import { transition, trigger, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('0ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class SliderComponent implements OnInit {

  currentPosition: number = 0;

  constructor(private services: SliderService) { }

  public images: Slider[];

  ngOnInit(): void {
    this.services.getSlider().subscribe(
      (Response: Slider[]) => {
        this.images = Response;
      },
      error => {
        alert("An error occured: " + error);
      }
    )
  }

  next(): void {
    const next = this.currentPosition + 1;
    this.currentPosition = next === this.images.length ? 0 : next;
  }

  prev(): void {
    const prev = this.currentPosition - 1;
    this.currentPosition = prev < 0 ? this.images.length - 1 : prev;
  }

}

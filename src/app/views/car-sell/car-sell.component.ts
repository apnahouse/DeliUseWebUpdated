import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-sell',
  templateUrl: './car-sell.component.html',
  styleUrls: ['./car-sell.component.scss'],
})
export class CarSellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageUpload() {
    console.warn('Button Click');
  }
}

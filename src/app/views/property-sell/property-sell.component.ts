import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-sell',
  templateUrl: './property-sell.component.html',
  styleUrls: ['./property-sell.component.scss'],
})
export class PropertySellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageUpload() {
    console.warn('Button Click');
  }
}

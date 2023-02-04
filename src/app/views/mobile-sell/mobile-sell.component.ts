import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-sell',
  templateUrl: './mobile-sell.component.html',
  styleUrls: ['./mobile-sell.component.scss'],
})
export class MobileSellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageUpload() {
    console.warn('Button Click');
  }
}

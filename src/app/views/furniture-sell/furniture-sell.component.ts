import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture-sell',
  templateUrl: './furniture-sell.component.html',
  styleUrls: ['./furniture-sell.component.scss'],
})
export class FurnitureSellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageUpload() {
    console.warn('Button Click');
  }
}

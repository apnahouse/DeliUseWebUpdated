import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics-sell',
  templateUrl: './electronics-sell.component.html',
  styleUrls: ['./electronics-sell.component.scss'],
})
export class ElectronicsSellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageUpload() {
    console.warn('Button Click');
  }
}

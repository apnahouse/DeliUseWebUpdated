import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motor-cycle-sell',
  templateUrl: './motor-cycle-sell.component.html',
  styleUrls: ['./motor-cycle-sell.component.scss'],
})
export class MotorCycleSellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageUpload() {
    console.warn('Button Click');
  }
}

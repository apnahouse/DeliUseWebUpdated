import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sell-category',
  templateUrl: './sell-category.component.html',
  styleUrls: ['./sell-category.component.scss'],
})
export class SellCategoryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openPropertySell() {
    this.router.navigate(['/propertySell']);
  }
  openMotorcycleSell() {
    this.router.navigate(['/motorCycleSell']);
  }
  openCarSell() {
    this.router.navigate(['/carSell']);
  }
  openMobileSell() {
    this.router.navigate(['/mobileSell']);
  }
  openElectronicsSell() {
    this.router.navigate(['/electronicSell']);
  }
  openFurnitureSell() {
    this.router.navigate(['/furnitureSell']);
  }
}

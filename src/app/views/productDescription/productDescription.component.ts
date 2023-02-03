import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productDescription',
  templateUrl: './productDescription.component.html',
  styleUrls: ['./productDescription.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  responsiveOptions;
  displayBasic: boolean = false;
  tableList: any[] = [];
  constructor() {
    this.responsiveOptions = [
      // {
      //   breakpoint: '1024px',
      //   numVisible: 3,
      //   numScroll: 3,
      // },
      // {
      //   breakpoint: '768px',
      //   numVisible: 2,
      //   numScroll: 2,
      // },
      {
        // breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.tableList = [
      {
        description:
          'A Private Villa with Car Park. Conveniently situated in the Bhose part of Mahabaleshwar, this property puts you close to attractions and interesting dining options. This 4-star property is packed with in-house facilities to improve the quality and joy of your stay.',
        id: 10000,
        image:
          'https://images.trvl-media.com/hotels/62000000/61420000/61415000/61414991/d001363a.jpg?impolicy=resizecrop&rw=598&ra=fit',
        name: 'FARM VILLA',
        totalRows: 5,
      },
      {
        description:
          'A Private Villa with Car Park. Conveniently situated in the Bhose part of Mahabaleshwar, this property puts you close to attractions and interesting dining options. This 4-star property is packed with in-house facilities to improve the quality and joy of your stay.',
        id: 10000,
        image:
          'https://images.trvl-media.com/hotels/62000000/61420000/61415000/61414991/0c96f645.jpg?impolicy=resizecrop&rw=297&ra=fit',
        name: 'FARM VILLA',
        totalRows: 5,
      },
      {
        description:
          'A Private Villa with Car Park. Conveniently situated in the Bhose part of Mahabaleshwar, this property puts you close to attractions and interesting dining options. This 4-star property is packed with in-house facilities to improve the quality and joy of your stay.',
        id: 10000,
        image:
          'https://images.trvl-media.com/hotels/62000000/61420000/61415000/61414991/c588dc96.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        name: 'FARM VILLA',
        totalRows: 5,
      },
      {
        description:
          'A Private Villa with Car Park. Conveniently situated in the Bhose part of Mahabaleshwar, this property puts you close to attractions and interesting dining options. This 4-star property is packed with in-house facilities to improve the quality and joy of your stay.',
        id: 10000,
        image:
          'https://images.trvl-media.com/hotels/62000000/61420000/61415000/61414991/016e3bf1.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        name: 'FARM VILLA',
        totalRows: 5,
      },
    ];
  }

  ngOnInit() {}

  ShowPopup() {
    this.displayBasic = true;
  }
}

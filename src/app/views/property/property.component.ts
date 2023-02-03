import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  ProertyResponse,
  PropertyMaster,
} from 'src/app/models/masters/Property';
import { ProductServiceService } from 'src/app/services/product-Service.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent implements OnInit {
  tableList: PropertyMaster[] = [];
  columns: { field: string; header: string }[];
  totalRecords: number;
  loading: boolean;
  event: any;
  private subscriptions: Subscription[] = [];
  constructor(private productservice: ProductServiceService) {
    this.columns = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'image', header: 'Image' },
      //{ field: 'totalRows', header: 'TotalRows' },
    ];
  }

  ngOnInit() {}

  slides = [
    { img: '../../../assets/img/travel-market.jpg' },
    { img: '../../../assets/img/real-estate.jpg' },
    { img: '../../../assets/img/Education-market.jpg' },
    { img: '../../../assets/img/travel-market.jpg' },
    { img: '../../../assets/img/real-estate.jpg' },
    { img: '../../../assets/img/Education-market.jpg' },
    { img: '../../../assets/img/travel-market.jpg' },
    { img: '../../../assets/img/real-estate.jpg' },
    { img: '../../../assets/img/Education-market.jpg' },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    dots: 'true',
    autoplaySpeed: 1000,
    speed: 1400,
    arrows: true,

    infinite: true,
  };

  //get Load lazy
  loadLazy(event) {
    this.event = event;
    const obj = this.getLazyLoadingValues(this.event);
    this.getcartonSizeData(obj);
  }

  getLazyLoadingValues(event: any): any {
    const obj = {
      first: event.first + 1,
      searchValue: event.globalFilter ? event.globalFilter : '',
      multiSortMeta: event.multiSortMeta,
      pageSize: event.rows,
      sortColumn: event.sortField,
      sortOrder: event.sortOrder === 1 ? 'ASC' : 'DESC',
    };
    return obj;
  }

  // Get Table Data
  getcartonSizeData(event: any): any {
    this.subscriptions.push(
      this.productservice.GetPropertyDetails(event).subscribe(
        (response: ProertyResponse) => {
          if (response.responseCode === '200') {
            this.tableList = response.details;
            this.totalRecords = response.totalRows;
            this.tableList = this.tableList.slice();
          } else {
          }
        },
        (err) => {}
      )
    );
  }
}

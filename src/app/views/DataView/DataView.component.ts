import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ProertyResponse,
  PropertyMaster,
} from 'src/app/models/masters/Property';
import { ProductServiceService } from 'src/app/services/product-Service.service';

@Component({
  selector: 'app-DataView',
  templateUrl: './DataView.component.html',
  styleUrls: ['./DataView.component.css'],
})
export class DataViewComponent implements OnInit {
  tableList: PropertyMaster[] = [];
  columns: { field: string; header: string }[];
  totalRecords: number;
  loading: boolean;
  event: any;
  responsiveOptions;
  private subscriptions: Subscription[] = [];
  constructor(
    private productservice: ProductServiceService,
    private router: Router
  ) {
    this.columns = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'image', header: 'Image' },
      //{ field: 'totalRows', header: 'TotalRows' },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
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

  //on click
  product() {
    this.router.navigateByUrl('/productDescription');
  }

  // Get Table Data
  getcartonSizeData(event: any): any {
    this.subscriptions.push(
      this.productservice.GetPropertyDetails(event).subscribe(
        (response: ProertyResponse) => {
          if (response.responseCode === '200') {
            console.log(response.details);
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

  showDialog() {
    this.router.navigateByUrl('/sellProperty');
  }
}

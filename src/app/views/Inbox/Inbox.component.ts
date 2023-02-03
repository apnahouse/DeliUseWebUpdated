import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Inbox',
  templateUrl: './Inbox.component.html',
  styleUrls: ['./Inbox.component.css'],
})
export class InboxComponent implements OnInit {
  products: any[];

  cols: any[];

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        read: 'true',
        customerName: 'Aman Gupta',
        message: 'I am Interested In Your Property',
        property: 'Delhi NCR Farm',
        time: '3 Sep',
        // rating: '4',
      },
      {
        read: 'true',
        customerName: 'Asutosh Sharma',
        message: 'Lets Final It With 22L.',
        property: 'Noida 3BHK',
        time: '14 Aug',
        // rating: '4',
      },
      {
        read: 'true',
        customerName: 'Aman Gupta',
        message: 'You Have All Required Documents',
        property: 'Gurgaon Apartment',
        time: '3 Mar',
        // rating: '4',
      },
    ];
    this.cols = [
      { field: 'read', header: 'Read' },
      { field: 'customerName', header: 'Customer Name' },
      { field: 'message', header: 'Message' },
      { field: 'property', header: 'Property' },
      { field: 'time', header: 'Time' },
      // { field: 'rating', header: 'Rating' },
    ];
  }
}

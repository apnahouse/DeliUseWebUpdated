import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/services/product-Service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  productDialog: boolean;
  listBusiness: any[];
  columns: { field: string; header: string }[];
  submitted: boolean;
  totalRecords: number = 0;
  loading: boolean;
  businessForm: FormGroup;
  private subscriptions: Subscription[] = [];
  event: any;
  constructor(
    private productService: ProductServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) {
    this.initForm();
    this.columns = [
      { field: 'businessName', header: 'Business Name' },
      { field: 'businessModel', header: 'Business Model' },
      { field: 'location', header: 'Location' },
    ];
    this.listBusiness = [
      {
        businessName: 'Business Name',
        businessModel: 'Business Model',
        location: 'Location',
      },
    ];
  }

  ngOnInit() {}

  initForm() {
    this.businessForm = this.formBuilder.group({
      id: [0],
      location: [null, Validators.required],
      businessLabel: [null, Validators.required],
      businessName: [null, Validators.required],
    });
  }

  get f() {
    return this.businessForm.controls;
  }

  loadLazy(event) {
    this.event = event;
    const obj = this.getLazyLoadingValues(this.event);
    this.getClasses(obj);
  }

  getLazyLoadingValues(event: any): any {
    const obj = {
      first: event.first + 1,
      searchValue: event.globalFilter ? event.globalFilter : '',
      multiSortMeta: event.multiSortMeta,
      pageSize: event.rows,
      sortColumn: event.sortField,
      sortOrder: event.sortOrder === 1 ? 'ASC' : 'DESC',
      isActive: '%',
    };
    return obj;
  }

  // Get Table Data
  getClasses(event: any): any {
    this.subscriptions
      .push
      // this.subjectService.getSubjects(event).subscribe(
      //   (response: any) => {
      //     this.spinner.hide();
      //     if (response.responseCode === '200') {
      //       this.subjectData = response.details;
      //       this.totalRecords = response.totalRows;
      //       this.subjectData = this.subjectData.slice();
      //     } else {
      //     }
      //   },
      //   (err) => {
      //     this.spinner.hide();
      //   }
      // )
      ();
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
}

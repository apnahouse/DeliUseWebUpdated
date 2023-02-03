import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-Property',
  templateUrl: './sell-Property.component.html',
  styleUrls: ['./sell-Property.component.css'],
})
export class SellPropertyComponent implements OnInit {
  sellForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  initForm(): void {
    this.sellForm = this.formBuilder.group({
      userTypeId: [1], //Agent
      sellTypeId: [],
      propertyKindId: [],
      propertyTypeId: [],
      ageOfProperty: [],
      floorOfProperty: [],
      facingType: [],
      availableType: [],
      noOfBathroom: [],
      noOfBalcony: [],
      furnishingType: [],
      noOfCoveredParking: [],
      noOfOpenParking: [],
      city: [],
      locality: [],
      plotArea: [],
      builtUpArea: [],
      expectedPrice: [],
      totalFloors: [],
      maintenanceCharge: [],
      description: [],
    });
  }
  ngOnInit() {}

  get f() {
    return this.sellForm.controls;
  }
  onSubmit() {}
  onHidden() {}
}

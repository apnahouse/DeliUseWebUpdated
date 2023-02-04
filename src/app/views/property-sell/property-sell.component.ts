import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarSellService } from 'src/app/services/car-sell-service.service';
import { CityService } from 'src/app/services/city-service.service';
import { LoginService } from 'src/app/services/login.service';
import { StateService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-property-sell',
  templateUrl: './property-sell.component.html',
  styleUrls: ['./property-sell.component.scss'],
})
export class PropertySellComponent implements OnInit {
  public stateList = [];
  public cityList = [];

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carSellService: CarSellService,
    private stateService: StateService,
    private cityService: CityService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getState();
    this.initForm();
  }

  initForm(): any {
    const user = this.loginService.user();

    this.form = this.fb.group({
      State: new FormControl(0),
      City: new FormControl(0),
      ServiceId: new FormControl(),
      CategoryId: new FormControl(),
      TypeOfUser: new FormControl(),
      Action: new FormControl(),
      KindOfProperty: new FormControl(),
      Type: new FormControl(),
      Age: new FormControl(),
      Floor: new FormControl(),
      Facing: new FormControl(),
      Availability: new FormControl(),
      Bathroom: new FormControl(),
      Balcony: new FormControl(),
      FurnishingType: new FormControl(),
      CoveredParking: new FormControl(),
      OpenParking: new FormControl(),
      Locality: new FormControl(),
      PlotArea: new FormControl(),
      BuiltUpArea: new FormControl(),
      ExpectedPrice: new FormControl(),
      TotalFloors: new FormControl(),
      Description: new FormControl(),
      MaintenanceCharge: new FormControl(),
      PropertyImage: new FormControl(),
      PropertyImage1: new FormControl(),
      CreatedBy: new FormControl(user['id']),
    });
  }

  getState() {
    this.stateService.getStates().subscribe((resp) => {
      this.stateList = resp['details'];
    });
  }

  getCity() {
    var param = {
      stateId: this.form.value.State,
    };
    this.cityService.getCity(param).subscribe((resp) => {
      this.cityList = resp['details'];
    });
  }

  onStateChange(event) {
    this.getCity();
  }
  imageUpload() {
    console.warn('Button Click');
  }

  onSave() {
    const formData: any = new FormData();
    formData.append('State', this.form.get('State').value);
    formData.append('City', this.form.get('City').value);
    formData.append('ServiceId', this.form.get('ServiceId').value);
    formData.append('CategoryId', this.form.get('CategoryId').value);
    formData.append('TypeOfUser', this.form.get('TypeOfUser').value);
    formData.append('Action', this.form.get('Action').value);
    formData.append('KindOfProperty', this.form.get('KindOfProperty').value);
    formData.append('Type', this.form.get('Type').value);
    formData.append('Age', this.form.get('Age').value);
    formData.append('Floor', this.form.get('Floor').value);
    formData.append('Availability', this.form.get('Availability').value);
    formData.append('Bathroom', this.form.get('Bathroom').value);
    formData.append('Balcony', this.form.get('Balcony').value);
    formData.append('FurnishingType', this.form.get('FurnishingType').value);
    formData.append('CoveredParking', this.form.get('CoveredParking').value);
    formData.append('OpenParking', this.form.get('OpenParking').value);
    formData.append('Locality', this.form.get('Locality').value);
    formData.append('PlotArea', this.form.get('PlotArea').value);
    formData.append('BuiltUpArea', this.form.get('BuiltUpArea').value);
    formData.append('ExpectedPrice', this.form.get('ExpectedPrice').value);
    formData.append('TotalFloors', this.form.get('TotalFloors').value);
    formData.append('Description', this.form.get('Description').value);
    formData.append(
      'MaintenanceCharge',
      this.form.get('MaintenanceCharge').value
    );
    formData.append('PropertyImage', this.form.get('PropertyImage').value);
    formData.append('PropertyImage1', this.form.get('PropertyImage1').value);
    formData.append('CreatedBy', this.form.get('CreatedBy').value);

    this.carSellService.SaveCarSell(formData).subscribe((resp) => {
      debugger;
    });
  }
}

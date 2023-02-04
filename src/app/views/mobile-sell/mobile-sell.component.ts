import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarSellService } from 'src/app/services/car-sell-service.service';
import { CityService } from 'src/app/services/city-service.service';
import { LoginService } from 'src/app/services/login.service';
import { StateService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-mobile-sell',
  templateUrl: './mobile-sell.component.html',
  styleUrls: ['./mobile-sell.component.scss'],
})
export class MobileSellComponent implements OnInit {
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
      Brand: new FormControl(),
      Year: new FormControl(),
      PostTitle: new FormControl(),
      Description: new FormControl(),
      Price: new FormControl(),
      Image: new FormControl(),
      Image1: new FormControl(),
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
    formData.append('Brand', this.form.get('Brand').value);
    formData.append('Year', this.form.get('Year').value);
    formData.append('PostTitle', this.form.get('PostTitle').value);
    formData.append('Description', this.form.get('Description').value);
    formData.append('Price', this.form.get('Price').value);
    formData.append('Image', this.form.get('Image').value);
    formData.append('Image1', this.form.get('Image1').value);
    formData.append('CreatedBy', this.form.get('CreatedBy').value);
    this.carSellService.SaveMobileSell(formData).subscribe((resp) => {
      debugger;
    });
  }
}

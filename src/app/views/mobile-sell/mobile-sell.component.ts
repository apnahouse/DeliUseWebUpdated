import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarSellService } from 'src/app/services/car-sell-service.service';
import { CityService } from 'src/app/services/city-service.service';
import { LoginService } from 'src/app/services/login.service';
import { StateService } from 'src/app/services/state-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mobile-sell',
  templateUrl: './mobile-sell.component.html',
  styleUrls: ['./mobile-sell.component.scss'],
})
export class MobileSellComponent implements OnInit {
  public stateList = [];
  public cityList = [];
  public selectedFile;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carSellService: CarSellService,
    private stateService: StateService,
    private cityService: CityService,
    private loginService: LoginService,
    private location: Location
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
      ServiceId: new FormControl(2),
      CategoryId: new FormControl(4),
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
    document.getElementById('uploader').click();
  }

  async fileSelectChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];

      this.form.patchValue({ Image1: file });
      // this.form.patchValue({ Image: file.name });
      // if (file.size < 204800) {
      //   const arrayBuffer = await file.arrayBuffer();
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.selectedFile = event.target.result;
      };

      //   console.log(arrayBuffer);
      //   const base64 = btoa(
      //     new Uint8Array(arrayBuffer).reduce(function (data, byte) {
      //       return data + String.fromCharCode(byte);
      //     }, '')
      //   );

      //   const file_name = file.name.split('.');
      //   const extension = file_name[file_name.length - 1];
      //   const fileName = file.name;

      //   console.log(base64);
      //   console.log(extension);
      //   console.log(fileName);
      // }
    }
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
      this.location.back();
    });
  }
}

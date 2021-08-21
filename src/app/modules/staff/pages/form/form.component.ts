import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/core/http/address/address.service';
import { StaffService } from 'src/app/core/http/staff/staff.service';
import { Address } from 'src/app/shared/models/address..model';
import { Staff } from 'src/app/shared/models/staff.model';
import { Store } from 'src/app/shared/models/store.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  address: Address = {} as Address;
  validAddress = false;
  employee: Staff = {} as Staff;
  stores: Store[] = [];
  picture: Blob = new Blob();
  formData: FormData = new FormData();
  pictURL: SafeUrl = '';
  isEdit = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private addressService: AddressService,
    private staffService: StaffService,
    private fBuilder: FormBuilder,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  employeeForm: FormGroup = this.fBuilder.group({
    address_id: [''],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    store_id: ['', [Validators.required]],
    username: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.stores = data.stores;
      if (data.employee) {
        this.isEdit = true;
        this.employee = data.employee.res[0];
        this.employeeForm.reset(this.employee);
        this.address = data.employee.res[2].address;
        if (data.picture) {
          const Uint = new Uint8Array(data.picture.data.data);
          this.picture = new Blob([Uint], { type: data.picture.mimetype });
          console.log(this.picture);
          const source = window.URL.createObjectURL(this.picture);
          this.pictURL = this.sanitizer.bypassSecurityTrustUrl(source);
        }
      }
    });
  }
  invalid(field: string): boolean {
    return !!(
      this.employeeForm.controls[field]?.touched &&
      this.employeeForm.controls[field]?.invalid
    );
  }
  setPicture(picture: any) {
    const fileReader = new FileReader();
    this.formData = new FormData();
    fileReader.onload = (event: ProgressEvent) => {
      this.picture = new Blob(picture.target.files, {
        type: picture.target.files[0].type,
      });
      this.formData.append('file', this.picture);
      const source = window.URL.createObjectURL(this.picture);
      this.pictURL = this.sanitizer.bypassSecurityTrustUrl(source);
    };
    fileReader.readAsArrayBuffer(picture.target.files[0]);
  }
  deletePicture() {
    this.formData = new FormData();
    this.picture = new Blob();
    this.pictURL = '';
  }

  submit() {
    if (this.employeeForm.valid && this.validAddress) {
      if (this.isEdit) {
        this.employeeForm.removeControl('address_id');
        this.addressService
          .update(this.address, this.address.address_id)
          .subscribe((res) => this.router.navigate(['/staff']));
        this.staffService
          .update(this.employeeForm.value, this.employee.staff_id)
          .subscribe((res) => this.router.navigate(['/staff']));
        this.staffService
          .updatePicture(this.formData, this.employee.staff_id)
          .subscribe((res) => {
            console.log(res);
            this.router.navigate(['/staff']);
          });
      } else {
        this.addressService.create(this.address).subscribe((res: any) => {
          this.employeeForm.controls['address_id'].setValue(res.id);
          this.staffService
            .create(this.employeeForm.value)
            .subscribe((res: any) => {
              this.staffService
                .updatePicture(this.picture, res.res.insertId)
                .subscribe((res) => this.router.navigate(['/staff']));
            });
        });
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/core/http/address/address.service';
import { StoreService } from 'src/app/core/http/store/store.service';
import { Address } from 'src/app/shared/models/address..model';
import { Staff } from 'src/app/shared/models/staff.model';
import { Store } from 'src/app/shared/models/store.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  store: Store = {} as Store;
  address: Address = {} as Address;
  validAddress = false;  
  personal: Staff[] = [];
  isEdit = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fBuilder: FormBuilder,
    private addressService: AddressService,
    private storeService: StoreService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.personal = data.staff.res as Staff[];
      if (data.store) {
        this.store = data.store[0];
        this.isEdit = true;
        this.storeForm.setValue({
          name: this.store.name,
          manager_staff_id: this.store.manager_staff_id,
          address_id: this.store.address_id,
        });
        this.address = data.store[1].address as Address;
      }
    });
  }

  storeForm: FormGroup = this.fBuilder.group({
    name: ['', [Validators.required]],
    manager_staff_id: ['', [Validators.required, Validators.min(1)]],
    address_id: [''],
  });

  invalid(field: string): boolean {
    return !!(
      this.storeForm.controls[field]?.invalid &&
      this.storeForm.controls[field]?.touched
    );
  }

  submit() {
    if (this.validAddress && this.storeForm.valid) {
      if (!this.isEdit)
        this.addressService.create(this.address).subscribe((res: any) => {
          this.storeForm.controls['address_id'].setValue(res.id);
          this.storeService.create(this.storeForm.value).subscribe((res) => {
            this.router.navigate(['/store']);
          });
        });
      if (this.isEdit)
        this.addressService
          .update(this.address, this.storeForm.controls['address_id'].value)
          .subscribe((res) => {
            this.storeService
              .update(this.storeForm.value, this.store.store_id)
              .subscribe((res) => {
                this.router.navigate(['/store']);
              });
          });
    }
  }
  cancel() {}
}

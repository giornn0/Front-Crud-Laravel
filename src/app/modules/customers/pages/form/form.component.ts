import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/core/http/address/address.service';
import { CustomerService } from 'src/app/core/http/customer/customer.service';
import { Address } from 'src/app/shared/models/address..model';
import { Customer } from 'src/app/shared/models/customer.model';
import { Store } from 'src/app/shared/models/store.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  customer: Customer = {} as Customer;
  address: Address = {} as Address;
  stores: Store[] = [];
  isEdit:boolean = false
  validAddress = false

  constructor(
    private fBuilder: FormBuilder,
    private customerService: CustomerService,
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  customerForm: FormGroup = this.fBuilder.group({
    address_id: [''],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: [''],
    store_id: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.stores = data.stores as Store[];
      if (data.customer) {
        this.isEdit = true
        this.customer = data.customer.res[0]
        this.customerForm.reset(this.customer)
        this.address = data.customer.res[1].address
      }
    });
  }

  invalid(field: string): boolean {
    return !!(
      this.customerForm.controls[field].invalid &&
      this.customerForm.controls[field].touched
    );
  }
  submit(){
    if(this.validAddress && this.customerForm.valid){
      if(this.isEdit){
        this.addressService.update(this.address,this.address.address_id).subscribe(()=>{
          this.router.navigate(['customers'])
        })
        this.customerService.update(this.customerForm.value,this.customer.customer_id).subscribe(()=>{
          this.router.navigate(['customers'])
        })
      }
      else{
        this.addressService.create(this.address).subscribe((res: any)=>{
          this.customerForm.controls['address_id'].setValue(res.id)
          this.customerService.create(this.customerForm.value).subscribe(()=>{
            this.router.navigate(['customers'])
          })
        })
      }
    }
  }

}

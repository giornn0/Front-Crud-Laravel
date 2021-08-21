import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../models/address..model';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  @Input() editingAddress: Address = {} as Address;
  @Output() submiting: EventEmitter<any> = new EventEmitter();
  @Output() valid: EventEmitter<boolean> = new EventEmitter();
  address: Address = {} as Address;
  constructor(private fBuilder: FormBuilder) {}

  addressForm: FormGroup = this.fBuilder.group({
    address_id: [''],
    address: ['', [Validators.required]],
    address2: [''],
    district: ['', [Validators.required]],
    city: ['', [Validators.required]],
    postal_code: [''],
    phone: ['', [Validators.required]],
    state: ['', [Validators.required]],
  });

  ngOnInit(): void {
    // this.addressForm.reset(this.editingAddress);
    this.addressForm.valueChanges.subscribe((form) => {
      if (this.addressForm.valid) {
        this.valid.emit(true);
        this.submiting.emit(form);
      } else {
        this.valid.emit(false);
      }
    });
    this.addressForm.reset(this.editingAddress);
  }

  invalid(field: string): boolean {
    return !!(
      this.addressForm.controls[field]?.invalid &&
      this.addressForm.controls[field]?.touched
    );
  }
}

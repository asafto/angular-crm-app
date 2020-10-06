import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';

import { Customer } from '../../interfaces/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  constructor(
    private routerService: Router,
    private customersService: CustomersService,
    private activatedRouteService: ActivatedRoute
  ) {}

  async onSubmit({ value, valid }: { value: Customer; valid: boolean }) {
    if (valid) {
      await this.customersService.update(this.customer.id, value);
      this.routerService.navigate(['/customers']);
    }
  }

  ngOnInit(): void {
    // Get params observable - async
    this.activatedRouteService.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => (this.customer = customer));
  }
}

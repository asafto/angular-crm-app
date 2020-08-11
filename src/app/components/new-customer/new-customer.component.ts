import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../interfaces/customer';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  constructor(private customersService: CustomersService, private routerService: Router) {}

  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  reset(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  async onSubmit(form: NgForm) {
       //create a document in firestore database
    if (form.valid) {
      await this.customersService.add(form.value);
      //rerouting to customers screen
      this.routerService.navigate(['/customers']);
    }
  }

  ngOnInit(): void {}
}

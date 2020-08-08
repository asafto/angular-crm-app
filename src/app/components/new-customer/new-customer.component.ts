import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../interfaces/customer';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor() { }

  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  };

  reset(form: NgForm){
    form.resetForm({
      firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    })
  }

  onSubmit(form: NgForm) {
    console.log(form.valid, form.value);
    this.reset(form);
    //TODO: create a document in db
  }

  ngOnInit(): void {
  }

}

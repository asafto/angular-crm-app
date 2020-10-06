import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from 'src/app/interfaces/customer';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent /* implements OnInit, OnDestroy */ {
  // customersData: Customer[];
  // unSub: Subscription;

  customers$: Observable<Customer[]>;
  term: string = '';

  constructor(private customersService: CustomersService) {
    this.customers$ = this.customersService.getAll();
  }

  remove(id: string, e: MouseEvent) {
    e.preventDefault();
    if (confirm('Are you sure you would like to delete')) {
      this.customersService.remove(id);
    }
  }

  // ngOnInit(): void {
  //   this.unSub = this.customersService.getAll().pipe(tap(console.log)).subscribe((data) => {
  //     this.customersData = data;
  //   });
  // }

  // ngOnDestroy() {
  //   this.unSub.unsubscribe();
  // }
}

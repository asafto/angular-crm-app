import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customer$: Observable<Customer> = null;
  // idParam: string = '';
  // unsub: Subscription[] = [];

  constructor(
    private activatedRouteService: ActivatedRoute,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    // this.unsub.push(
    //   this.activatedRouteService.params.subscribe((params) => {
    //     this.idParam = params.id;

    //     this.customer$ = this.customersService.getById(this.idParam);
    //   })
    // );

    this.customer$ = this.activatedRouteService.params.pipe(
      switchMap((params) => this.customersService.getById(params.id))
    );
  }

  ngOnDestroy() {
    // this.unsub.forEach((item) => item.unsubscribe());
  }
}

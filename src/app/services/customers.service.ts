import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Customer } from '../interfaces/customer';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: AngularFirestoreCollection<Customer>;
  customers$: Observable<Customer[]>;

  constructor(private afs: AngularFirestore) {
    this.customersRef = this.afs.collection('customers');
    this.customers$ = this.customersRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }

  add(customer: Customer) {
    return this.customersRef.add(customer);
  }

  getAll(): Observable<Customer[]> {
    return this.customersRef.valueChanges({ idField: 'id' });
  }

  remove(id: string) {
    return this.customersRef.doc(id).delete();
  }

  getById(id: string): Observable<Customer> {
    return this.customersRef
      .doc<Customer>(id)
      .valueChanges()
      .pipe(
        map((doc) => {
          if (doc) {
            return { id, ...doc };
          }
          return doc;
        })
      );
  }
  update(id: string, value: Customer) {
    return this.customersRef.doc(id).update(value);
  }
}

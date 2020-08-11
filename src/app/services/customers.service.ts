import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Customer } from '../interfaces/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: AngularFirestoreCollection<Customer>;

  constructor(private afs: AngularFirestore) {
    this.customersRef = this.afs.collection('customers');
  }

  add(customer: Customer) {
    return this.customersRef.add(customer);
  }

  getAll(): Observable<Customer[]> {
    return this.customersRef.valueChanges({idField: 'id'});
  }

  remove(id: string) {
    return this.customersRef.doc(id).delete();
  }
}

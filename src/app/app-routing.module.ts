import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/new',
    component: NewCustomerComponent,
  },
  {
    path: 'customers/:id',
    component: CustomerDetailsComponent,
  },
  {
    path: 'customers/:id/edit',
    component: CustomerEditComponent,
  },
  {
    path: 'pageNotFound',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'pageNotFound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

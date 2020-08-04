import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'pageNotFound',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'pageNotFound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

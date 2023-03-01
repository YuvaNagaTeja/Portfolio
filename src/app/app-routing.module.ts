import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DataListComponent } from './ContactComponents/data-list/data-list.component';
import { DataNavbarComponent } from './ContactComponents/data-navbar/data-navbar.component';
import { SubscribersDataComponent } from './ContactComponents/subscribers-data/subscribers-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data',
    component: DataNavbarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'subscribers',
    component: SubscribersDataComponent
  },
  {
    path: 'contacts_data',
    component: DataListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

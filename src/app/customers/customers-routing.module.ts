import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { OrdersComponent } from '../orders/orders.component';


const routes: Routes = [
  { path: 'customers', component: CustomersComponent, 
  children: [
    {
      path: 'child-a', // child route path
      component: OrdersComponent // child route component that the router renders
    },
    {
      path: 'child-b',
      component: OrdersComponent // another child route component that the router renders
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

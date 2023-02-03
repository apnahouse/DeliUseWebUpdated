import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CartoningComponent } from './cartoning/cartoning.component';
// import { CartonslipGenerationComponent } from './cartonslip-generation/cartonslip-generation.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transactions',
    },
    children: [
      {
        path: '',
        redirectTo: 'issuenumbers',
      },
      // {
      //   path: 'cartoning',
      //   component: CartoningComponent,
      //   data: {
      //     title: 'Cartoning',
      //   },
      // },
      // {
      //   path: 'cartonSlip',
      //   component: CartonslipGenerationComponent,
      //   data: {
      //     title: 'Carton Slip Generation',
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}

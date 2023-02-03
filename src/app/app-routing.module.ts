import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/auth/auth-guard.service';
import { LayoutComponent } from './template/layout/layout.component';
import { CategoryComponent } from './views/category/category.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DataViewComponent } from './views/DataView/DataView.component';
import { InboxComponent } from './views/Inbox/Inbox.component';
import { LoginComponent } from './views/login/login.component';
import { ProductDescriptionComponent } from './views/productDescription/productDescription.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PropertyComponent } from './views/property/property.component';
import { SellPropertyComponent } from './views/sell-Property/sell-Property.component';
import { UserCreationComponent } from './views/UserCreation/UserCreation.component';

const routes: Routes = [
  // {
  //   path: 'forgotpassword',
  //   component: ForgotPasswordComponent,
  //   data: {
  //     title: 'Forgot Password',
  //   },
  // },

  // {
  //   path: 'productAuth',
  //   component: ProductAuthenticationComponent,
  //   data: {
  //     title: 'Product',
  //   },
  // },
  // {
  //   path: 'gpd/:gtinPrefix/:gtin/:srnoprefix/:srno',
  //   component: ProductAuthenticationComponent,
  //   data: {
  //     title: 'Authentication Page',
  //     // gpd/:gtinPrefix/:gtin/:srnoprefix/:srno/:batchPrefix/:batch
  //   },
  // },
  {
    path: '',
   // canActivate: [AuthGuardService],
    component: DashboardComponent,
    children: [
      {
        path: '',
        // redirectTo: './dashboard',
        // pathMatch: 'full',
        component:LayoutComponent
      },
      // {
      //   path: 'changepassword',
      //   component: ChangePasswordComponent,
      //   canActivate: [AuthGuardService],
      // },
      // {
      //   path: 'profile',
      //   component: ProfileComponent,
      //   canActivate: [AuthGuardService],
      // },
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent,
      //   canActivate: [AuthGuardService],
      // },
      {
        path: 'property',
        component: PropertyComponent,
      },
      {
        path: 'dataView',
        component: DataViewComponent,
      },
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path: 'userCreation',
        component: UserCreationComponent,
      },
      {
        path: 'productDescription',
        component: ProductDescriptionComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      },
      // {
      //   path: 'masters',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () =>
      //     import('./views/masters/masters.module').then((m) => m.MastersModule),
      // },
      // {
      //   path: 'transactions',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () =>
      //     import('./views/transactions/transactions.module').then(
      //       (m) => m.TransactionsModule
      //     ),
      // },
      // {
      //   path: 'sales',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () =>
      //     import('./views/sales/sales.module').then((m) => m.SalesModule),
      // },
      // {
      //   path: 'purchase',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () =>
      //     import('./views/purchase/purchase.module').then(
      //       (m) => m.PurchaseModule
      //     ),
      // },
      // {
      //   path: 'reports',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () =>
      //     import('./views/reports/reports.module').then((m) => m.ReportsModule),
      // },
      // {
      //   path: 'userAdmin',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () =>
      //     import('./views/user-administration/user-administration.module').then(
      //       (m) => m.UserAdministrationModule
      //     ),
      // },
      // {
      //   path: 'productAdmin',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () =>
      //     import(
      //       './views/product-administration/product-administration.module'
      //     ).then((m) => m.ProductAdministrationModule),
      // },
      // {
      //   path: 'marketing',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () =>
      //     import('./views/marketing/marketing.module').then(
      //       (m) => m.MarketingModule
      //     ),
      // },
    ],
  },
  {
      path: 'dashboard',
      component: DashboardComponent
    },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: LayoutComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'sellProperty',
    component: SellPropertyComponent,
  },
  {
    path: '**',

    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

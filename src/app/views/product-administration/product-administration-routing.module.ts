import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { BatchMasterComponent } from './batch-master/batch-master.component';
// import { CartonSizeMasterComponent } from './carton-size-master/carton-size-master.component';
// import { PriceMasterComponent } from './price-master/price-master.component';
// import { ProductConfigurationComponent } from './product-configuration/product-configuration.component';
// import { ProductMappingManualComponent } from './Product-mapping-manual/Product-mapping-manual.component';
// import { ProductMappingComponent } from './product-mapping/product-mapping.component';
// import { ProductMasterComponent } from './product-master/product-master.component';
// import { RePrintLabelComponent } from './rePrint-Label/rePrint-Label.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Masters',
    },
    children: [
      {
        path: '',
        redirectTo: 'usermaster',
      },
      // {
      //   path: 'productmaster',
      //   component: ProductMasterComponent,
      //   data: {
      //     title: 'Product Master',
      //   },
      // },
      // {
      //   path: 'reprintLabel',
      //   component: RePrintLabelComponent,
      //   data: {
      //     title: 'Reprint Label',
      //   },
      // },

      // {
      //   path: 'pricemaster',
      //   component: PriceMasterComponent,
      //   data: {
      //     title: 'Price Master',
      //   },
      // },
      // {
      //   path: 'cartonSize',
      //   component: CartonSizeMasterComponent,
      //   data: {
      //     title: 'Carton Size Master',
      //   },
      // },

      // {
      //   path: 'batchmaster',
      //   component: BatchMasterComponent,
      //   data: {
      //     title: 'Batch Master',
      //   },
      // },
      // {
      //   path: 'productConfig',
      //   component: ProductConfigurationComponent,
      //   data: {
      //     title: 'Product Configuration',
      //   },
      // },
      // {
      //   path: 'productmapping',
      //   component: ProductMappingComponent,
      //   data: {
      //     title: 'Product Mapping',
      //   },
      // },
      // {
      //   path: 'productmappingmanual',
      //   component: ProductMappingManualComponent,
      //   data: {
      //     title: 'Product Mapping Manual',
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductAdministrationRoutingModule {}

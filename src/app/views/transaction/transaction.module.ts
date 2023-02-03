import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { SidepanelPipe } from '.d:/Binario Projects/O3Plus/O3Plus1/src/app/views/sidepanel.pipe';

@NgModule({
  declarations: [	
      SidepanelPipe
   ],
  imports: [CommonModule, TransactionsRoutingModule],
})
export class TransactionModule {}

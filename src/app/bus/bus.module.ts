import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmtComponent } from './pmt/pmt.component';
import { FormsModule }   from '@angular/forms';





@NgModule({
  declarations: [PmtComponent],
  imports: [
    CommonModule,
     FormsModule

  ],
  exports: [PmtComponent,FormsModule]
})
export class BusModule { }

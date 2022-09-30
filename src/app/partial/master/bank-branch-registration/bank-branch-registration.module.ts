import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankBranchRegistrationRoutingModule } from './bank-branch-registration-routing.module';
import { BankBranchRegistrationComponent } from './bank-branch-registration.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';
import { AddBankBranchRegistrationComponent } from './add-bank-branch-registration/add-bank-branch-registration.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BankBranchRegistrationComponent,
    AddBankBranchRegistrationComponent
  ],
  imports: [
    CommonModule,
    BankBranchRegistrationRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class BankBranchRegistrationModule { }

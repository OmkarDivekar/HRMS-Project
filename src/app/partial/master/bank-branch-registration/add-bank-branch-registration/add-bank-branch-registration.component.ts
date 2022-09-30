import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/core/services/call-api.service';

@Component({
  selector: 'app-add-bank-branch-registration',
  templateUrl: './add-bank-branch-registration.component.html',
  styleUrls: ['./add-bank-branch-registration.component.scss']
})
export class AddBankBranchRegistrationComponent implements OnInit {

  displayedColumns: string[] = ['sr_no', 'Bank_Name','action'];
  dataSource = ELEMENT_DATA;

  constructor(private api : CallApiService) {}

  ngOnInit(): void {
    this.bindTable();
  }

  bindTable() {
    this.api.setHttp('get', 'BankBranchRegistration/GetAll', false, false, false, 'BankBranchRegistration');
    this.api.getHttp().subscribe({
      next: (res: any) =>
        res.statusCode == 200 ?( this.dataSource = res.responseData, console.log(this.dataSource)): this.dataSource = [],   
    })
  }

}
const ELEMENT_DATA: PeriodicElement[] = [
  {sr_no: 1, Bank_Name: '',action:''},
];
export interface PeriodicElement {
  sr_no: number;
  Bank_Name: any;
  action: any;
}

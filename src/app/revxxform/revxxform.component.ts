import { Component, OnInit } from '@angular/core';
import { Revxxclass } from '../shared/revxxclass.model';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-revxxform',
  templateUrl: './revxxform.component.html',
  styleUrls: ['./revxxform.component.scss']
})
export class RevxxformComponent implements OnInit {
  
  revxxForm: FormGroup;
  constructor() {
    this.revxxForm = new FormGroup({
      paymentRateName: new FormControl('', Validators.required),
      TransactionID: new FormControl('', Validators.required),
      baseAmount: new FormControl('', Validators.required),
      hashCode: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.required),
      companyCode: new FormControl('',  Validators.required),
      companyBranchCode: new FormControl('', Validators.required),
      companyBranchName: new FormControl('', Validators.required),
      transactionTypeID: new FormControl('', Validators.required),
      jobDate: new FormControl('', Validators.required)
    });
    
  }

  ngOnInit() {
    
  }

  test(){
    this.revxxForm.get('paymentRateName').value;
    this.revxxForm.get('TransactionID').value;
    this.revxxForm.get('baseAmount').value;
    this.revxxForm.get('hashCode').value;
    this.revxxForm.get('customerName').value;
    this.revxxForm.get('RcNumber').value;
    this.revxxForm.get('Address').value;
    this.revxxForm.get('email').value;
    this.revxxForm.get('phoneNumber').value;
    this.revxxForm.get('taxID').value;
    this.revxxForm.get('customerID').value;
    this.revxxForm.get('companyCode').value;
    this.revxxForm.get('companyBranchCode').value;
    this.revxxForm.get('companyBranchName').value;
    this.revxxForm.get('companyRcNumber').value;
    this.revxxForm.get('companyBranchAddress').value;
    this.revxxForm.get('companyBranchEmail').value;
    this.revxxForm.get('companyBranchPhoneNumber').value;
    this.revxxForm.get('stateCode').value;
    this.revxxForm.get('companyBranchTaxID').value;
    this.revxxForm.get('transactionTypeID').value;
    this.revxxForm.get('transactionDescription').value;
    this.revxxForm.get('jobDate').value;
  }



  
  
}

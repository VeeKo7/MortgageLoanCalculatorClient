import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Result} from "../model/result";
import {catchError, Observable, retry} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loanCalculator';
  personalCode: string = "";
  loanAmount: string = "";
  loanPeriod: string = "";
  result: Observable<Result> | undefined;
  approvedLoanPeriod: number = 0;
  approved: boolean = false;
  approvedAmount: number = 0;
  resultIsBack: boolean = false;

  constructor(private http: HttpClient) {
  }

  submitUserProfile() {

    this.result = this.http.post<Result>(
      "loan/api/approveLoan",
      {
        "personalCode" : this.personalCode,
        "loanAmount" : this.loanAmount,
        "loanPeriod" : this.loanPeriod
      }
    ).pipe(
      retry(5),
      catchError((err, caught) => {
        console.log(err, caught)
        return caught
      })
    )
    this.result.subscribe((resultFromBackend) => {
      //tell user if approved or not
      this.approved = resultFromBackend.approved
      this.approvedAmount = resultFromBackend.amountApproved;
      this.resultIsBack = true;
      this.approvedLoanPeriod = resultFromBackend.loanPeriod;
    })
  }
}

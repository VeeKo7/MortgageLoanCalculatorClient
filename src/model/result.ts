export

class Result {
  private _approved: boolean;
  private _amountApproved: number;
  private _loanPeriod: number;


  constructor(approved: boolean, amountApproved: number, loanPeriod: number) {
    this._approved = approved;
    this._amountApproved = amountApproved;
    this._loanPeriod = loanPeriod;
  }

  get approved(): boolean {
    return this._approved;
  }

  set approved(value: boolean) {
    this._approved = value;
  }

  get amountApproved(): number {
    return this._amountApproved;
  }

  set amountApproved(value: number) {
    this._amountApproved = value;
  }


  get loanPeriod(): number {
    return this._loanPeriod;
  }

  set loanPeriod(value: number) {
    this._loanPeriod = value;
  }
}

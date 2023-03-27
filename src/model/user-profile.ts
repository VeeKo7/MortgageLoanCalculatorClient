export class UserProfile {

  constructor(private _personalCode: string,
              private _loanAmount: string,
              private _loanPeriod: string) {}


  get personalCode(): string {
    return this._personalCode;
  }

  set personalCode(value: string) {
    this._personalCode = value;
  }

  get loanAmount(): string {
    return this._loanAmount;
  }

  set loanAmount(value: string) {
    this._loanAmount = value;
  }

  get loanPeriod(): string {
    return this._loanPeriod;
  }

  set loanPeriod(value: string) {
    this._loanPeriod = value;
  }
}

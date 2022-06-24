export class PersonAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = Math.round(this.earthAge / 0.24);
  }
}
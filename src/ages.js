export class PersonAge {
  constructor(earthAge, lifeEarth) {
    this.earthAge = earthAge;
    this.mercuryAge = Math.round(this.earthAge / 0.24);
    this.venusAge = Math.round(this.earthAge/ 0.62);
    this.marsAge = Math.round(this.earthAge/ 1.88);
    this.jupiterAge = Math.round(this.earthAge/ 11.86);
    this.lifeEarth = lifeEarth;
  }
}
export class PersonAge {
  constructor(earthAge, lifeEarth) {
    this.earthAge = earthAge;
    this.mercuryAge = Math.round(this.earthAge / 0.24);
    this.venusAge = Math.round(this.earthAge/ 0.62);
    this.marsAge = Math.round(this.earthAge/ 1.88);
    this.jupiterAge = Math.round(this.earthAge/ 11.86);
    this.lifeEarth = lifeEarth;
    this.earthRemaining = lifeEarth - earthAge;
    this.lifeMercury = Math.round(lifeEarth/ 0.24);
    this.mercuryRemaining = this.lifeMercury - this.mercuryAge;
    this.lifeVenus = Math.round(lifeEarth/ 0.62);
    this.venusRemaining = this.lifeVenus - this.venusAge;
    this.lifeMars = Math.round(lifeEarth/ 1.88);
    this.marsRemaining = this.lifeMars - this.marsAge;
    this.lifeJupiter = Math.round(lifeEarth/ 11.86);
    this.jupiterRemaining = this.lifeJupiter - this.jupiterAge;

  }
  earthOver() {
    if (this.earthRemaining > 0){
      return "--"
    }
    else {
        this.earthOverage = Math.abs(this.earthRemaining);
        return this.earthOverage;
      }
    }
    mercuryOver() {
      if (this.mercuryRemaining > 0){
        return "--"
      }
      else {
          this.mercuryOverage = Math.abs(this.mercuryRemaining);
          return this.mercuryOverage;
        }
    }
    venusOver() {
      if (this.venusRemaining > 0){
        return "--"
      }
      else {
          this.venusOverage = Math.abs(this.venusRemaining);
          return this.venusOverage;
        }
    }
    marsOver() {
      if (this.marsRemaining > 0){
        return "--"
      }
      else {
          this.marsOverage = Math.abs(this.marsRemaining);
          return this.marsOverage;
        }
    }
  }